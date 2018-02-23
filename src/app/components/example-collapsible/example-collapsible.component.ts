import {Component, Input, OnInit} from '@angular/core';
import {SwaggerService} from "../../services/swagger.service";

@Component({
  selector: 'app-example-collapsible',
  templateUrl: './example-collapsible.component.html',
  styleUrls: ['./example-collapsible.component.scss']
})
export class ExampleCollapsibleComponent implements OnInit {

  public mockData = {
    bodySample:"" +
     + "{\n" +
    "        fieldName: 'id',\n" +
    "        type: 'integer',\n" +
    "        required:'true',\n" +
    "        details: 'pet status in store',\n" +
    "        validValues: [\n" +
    "          'available'\n" +
    "        ]\n" +
    "      }" +
    "",
    bodySchema: [
      {
      header: 'Pets',
      fields : [
        {
          fieldName: 'id',
          type: 'integer',
          required:'true',
          details: 'pet status in store',
          validValues: [
            'available'
          ]
        },
        {
          fieldName: 'petType',
          type: 'string',
          required:'true',
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
          required:'false',
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
          required:'false',
          details: 'pet status in store',
          validValues: null
        }
      ]
    }
    ],
    responseSample: "" +
    "{\n" +
    "          fieldName: 'combatLevel',\n" +
    "          type: 'integer',\n" +
    "          required:'false',\n" +
    "          details: 'pet status in store',\n" +
    "          validValues: null\n" +
    "        }" +
    "",
    responseSchema:[
      {
        header: 'Pets',
        fields : [
          {
            fieldName: 'id',
            type: 'integer',
            required:'true',
            details: 'pet status in store',
            validValues: [
              'available'
            ]
          }
        ]
      },
      {
        header: 'Pets',
        fields : [
          {
            fieldName: 'id',
            type: 'integer',
            required:'true',
            details: 'pet status in store',
            validValues: [
              'available'
            ]
          }
        ]
      }
    ]
  }

  public mockText = {
    header : "Pets"
  }

  @Input('text') text = this.mockText;
  public collapsed = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

}
