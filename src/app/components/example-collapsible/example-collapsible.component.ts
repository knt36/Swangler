import {Component, Input, OnInit} from '@angular/core';
import {
  AppEndPoint, ResponseProperty,
  Schema
} from '../../models/endpoint/endpoint.model';

@Component({
  selector: 'app-example-collapsible',
  templateUrl: './example-collapsible.component.html',
  styleUrls: ['./example-collapsible.component.scss']
})
export class ExampleCollapsibleComponent implements OnInit {
  @Input('header') header;
  @Input('type') type: string; // sample or schema
  @Input('schema') schema: Schema;
  public collapsed = true;

  ngOnInit() {
    console.log(this.type);
  }


  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  generateSampleFromSchema(schema, level: number = 0) {
    const spacing = ' '.repeat(level);
    const spacingAttr = spacing + ' '.repeat(5);
    if (schema.properties != null) {
      let temp = spacing + '{ \n';
      const keys = Object.keys(schema.properties);
      for (let i = 0 ; i < keys.length; i ++) {
        if (schema.properties.hasOwnProperty(keys[i])) {
          temp = temp + spacingAttr + keys[i];
          if (schema.properties[keys[i]].type.toLowerCase() === 'object') {
            const schema2 = schema.properties[keys[i]];
            temp = temp + ' : ' + this.generateSampleFromSchema(schema2, level + 2);
          } else {
            const property: ResponseProperty = schema.properties[keys[i]];
            temp = `${temp}: '${property.example}'`;
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




