import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ResponseProperty,
  Schema
} from '../../models/endpoint/endpoint.model';
import * as hl from '../../../../node_modules/highlight.js/';

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

  ngOnInit() {
    const samples = document.querySelectorAll('.samples pre code');
    for (let index = 0; index < samples.length; index++) {
      const element = samples[index];
      hl.highlightBlock(element);
    }
  }


  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  generateSampleFromSchema(schema, level: number = 0) {
    const spacing = ' '.repeat(level);
    const spacingAttr = spacing + ' '.repeat(5);
    if (schema.properties && Object.keys(schema.properties).length === 0) {
      if (schema.example != null ) {
        Object.keys(schema.example).forEach( exampleName => {
          schema.properties[exampleName] = {
            'example': schema.example[exampleName]
          };
        });
      }
    }
    if (schema.properties != null) {
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
}




