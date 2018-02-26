import {Component, Input, OnInit} from '@angular/core';
import {SwaggerService} from '../../services/swagger.service';

@Component({
  selector: 'app-example-collapsible',
  templateUrl: './example-collapsible.component.html',
  styleUrls: ['./example-collapsible.component.scss']
})
export class ExampleCollapsibleComponent implements OnInit {

  public mockData1 = {
    type: 'sample',
    data: `{'type':'hello'}`
  };

  public mockData2 = {
    type: 'schema',
    data: {
      header: 'Monster Pets',
      fields: [
        {
          fieldName: 'id',
          type: 'integer',
          required: 'true',
          details: 'pet status in store',
          validValues: [
            'available'
          ]
        },
        {
          fieldName: 'petType',
          type: 'string',
          required: 'true',
          details: 'pet status in store',
          validValues: [
            'available',
            'pending',
            'dead',
            'abandoned',
            'crippled for life',
            'sold'
          ]
        },
        {
          fieldName: 'petName',
          type: 'boolean',
          required: 'false',
          details: 'pet status in store',
          validValues: [
            'available',
            'pending',
            'sold'
          ]
        },
        {
          fieldName: 'combatLevel',
          type: 'integer',
          required: 'false',
          details: 'pet status in store',
          validValues: null
        }
      ]
    }
  };

  public mockText = {
    header : 'Pets'
  };

  @Input('text') text = null;
  @Input('content') content = null;

  public collapsed = false;

  constructor() {
    console.log(this.mockData1);
  }

  ngOnInit() {
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;

  }

}
