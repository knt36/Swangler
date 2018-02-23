import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppEndPoint} from "./models/endpoint.model";
import {AppParameter} from "./models/parameter.model";


@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.scss']
})
export class EndpointComponent implements OnInit {

  public mockEndPointData = {
    name: 'List The Account',
    methodType: "get",
    path: "/accounts/",
    desc: "Get a list of all accounts in the system",
    paramters: [
      {
        name: "page_number",
        type: "integer",
        desc: "The page number to get",
        value: "20"
      },
      {
        name: "page_line",
        type: "integer",
        desc: "The page number to get",
        value: "25"
      },
      {
        name: "word_number",
        type: "integer",
        desc: "The page number to get",
        value: "26"
      }
    ],
    responseTypes: [
      "application/json",
      "soap/xml"
    ]
  };





  public isHidden:boolean = true;

  public mockData: AppEndPoint =
    new AppEndPoint('List The Account',
      'get', '/accounts/',
      'Get a list of all accounts in the system',
      [], []);

  @Input('endpointData') endpointData = this.mockEndPointData;
  @Output('samplesClicked') sampleClicked: EventEmitter<any> = new EventEmitter();
  @Output('testEndPointClicked') testEndPointClicked: EventEmitter<any> = new EventEmitter<any>();

  public selectedResponse = this.endpointData.responseTypes.length != 0 ? this.endpointData.responseTypes[0] : "none";
  public parameterFields = this.endpointData.paramters.map(res =>{return(res.value)});

  constructor() {
  }

  ngOnInit() {
  }

  public clickedTestEndPointBut(){

  }

}
