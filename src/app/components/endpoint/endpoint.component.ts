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
        httpPart:'query',
        type: "integer",
        required: true,
        desc: "The page number to get",
        value: "20"
      },
      {
        name: "page_line",
        httpPart:'path',
        type: "integer",
        required: true,
        desc: "The page number to get",
        value: "25"
      },
      {
        name: "word_number",
        httpPart:'body',
        type: "integer",
        required: true,
        desc: "The page number to get",
        value: "26"
      }
    ],
    responseTypes: [
      "application/json",
      "soap/xml"
    ],
    statusCodes:[
      {
        code:200,
        desc: 'Success'
      },
      {
        code:400,
        desc: 'No Auth'
      },
      {
        code:500,
        desc: 'Server sided problem?'
      }
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
  public parameterFields = {};

  constructor() {
    this.initParameterFields();
  }

  ngOnInit() {
  }

  private initParameterFields(){
    const params = this.endpointData.paramters;
    for( const p in params){
      this.parameterFields[params[p].name] = params[p].value;
    }
  }

  public clickedTestEndPointBut(){

  }

}
