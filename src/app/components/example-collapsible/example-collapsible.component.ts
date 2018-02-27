import {Component, Input, OnInit} from '@angular/core';
import {AppEndPoint, ResponseSchema, Schema} from '../../models/endpoint/endpoint.model';

@Component({
  selector: 'app-example-collapsible',
  templateUrl: './example-collapsible.component.html',
  styleUrls: ['./example-collapsible.component.scss']
})
export class ExampleCollapsibleComponent implements OnInit {
  @Input('header') header = 'Response Schema';
  @Input('schema') schema: Schema = AppEndPoint.MOCK_DATA.responses['200'].schema;
  @Input('type') type = 'schema'; // sample or schema

  public collapsed = false;

  ngOnInit() {
    console.log(this.generateSampleFromSchema(this.schema));
  }


  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
  generateSampleFromSchema(item: any, level: number = 0) {
    const spacing = ' '.repeat(level);
    const spacingAttr = spacing + ' '.repeat(5);
    if (item.$$ref != null) {
      const schema: ResponseSchema = item;
      let temp = spacing +  '{ \n';
      for (const p in schema.properties) {
        if (schema.properties.hasOwnProperty(p)) {
          temp = temp + spacingAttr + p;

          if ( schema.properties[p].$$ref  !=  null) {
            temp = temp + ' : ' + this.generateSampleFromSchema(schema.properties[p], level + 2);
          } else {
            temp = temp + ' : ' + schema.properties[p].example;
          }
          temp = temp + '\n';
        }
      }
      temp = temp + spacing + '}';
      return(temp);
    }
  }

}



