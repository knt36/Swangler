import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ResponseProperty,
  Schema
} from '../../models/endpoint/endpoint.model';
import * as hl from '../../../../node_modules/highlight.js/';
import {SwaggerService} from '../../services/swagger.service';

@Component({
  selector: 'app-example-collapsible',
  templateUrl: './example-collapsible.component.html',
  styleUrls: ['./example-collapsible.component.scss']
})
export class ExampleCollapsibleComponent implements OnInit {
  @Input('header') header;
  @Input('type') type: string; // sample or schema
  @Input('schema') schema: Schema;
  /* Returns JSON of Sample*/
  @Output('clickedSample') clickedSample: EventEmitter<any> = new EventEmitter();
  public collapsed = true;
  public Object = Object;
  public generatedSample = null;
  constructor(public swaggerService: SwaggerService) {

  }

  ngOnInit() {
    this.initLazySampleGenrator();
  }
  private initLazySampleGenrator() {
    if (!this.collapsed && !this.generatedSample) {
      this.generateSampleFromSchema(this.schema, 0);
    }
    this.swaggerService.getApiData().subscribe( res => {
      // If the swagger service reinitializes, then regeneration of the generated samples are required.
      this.generatedSample = null;
    });
  }


  toggleCollapse() {
    this.collapsed = !this.collapsed;
    if (!this.collapsed) {
      this.setSampleFromSchema(this.schema);
    }
  }
  public setSampleFromSchema(schema) {
    if (!this.generatedSample) {
      const temp = this.generateSampleFromSchema(schema, 0);
      this.generatedSample = {};
      this.generatedSample['highlight'] = hl.highlight('json', temp).value;
      this.generatedSample['json'] = temp;
    }
  }

  private generateSampleFromSchema(schema, level: number = 0) {
      console.log('generated sample');
      console.log(schema);
      const spacing = ' '.repeat(level);
      const spacingAttr = spacing + ' '.repeat(5);
      if (!schema.properties) {
        schema.properties = {};
      }
      if (schema.example) {
          Object.keys(schema.example).forEach(exampleName => {
            if (!schema.properties[exampleName]) {
              schema.properties[exampleName] = {};
            }
            schema.properties[exampleName]['example'] = schema.example[exampleName];
          });
      }
        let temp = spacing + '{ \n';
        const keys = Object.keys(schema.properties);
        for (let i = 0 ; i < keys.length; i ++) {
          if (schema.properties.hasOwnProperty(keys[i])) {
            temp = `${temp}${spacingAttr}"${keys[i]}"`;
            if (schema.properties[keys[i]].type != null && schema.properties[keys[i]].type.toLowerCase() === 'object') {
              const schema2 = schema.properties[keys[i]];
              temp = temp + ' : ' + this.generateSampleFromSchema(schema2, level + 2);
            } else {
              const property: ResponseProperty = schema.properties[keys[i]];
              temp = `${temp}: "${property.example}"`;
            }
            if ( i < keys.length - 1 ) {
              temp = temp + ',';
            }
            temp = temp + '\n';
          }
        }
        temp = temp + spacing + '}';
        return (temp);
  }
}




