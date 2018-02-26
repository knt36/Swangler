import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppEndPoint} from "../../models/endpoint/endpoint.model";
import {AppClickedSampleRes} from "../../models/endpoint/clicked-sample-res";
import {AppClickedTestRes} from "../../models/endpoint/clicked-test-res";


@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.scss']
})
export class EndpointComponent implements OnInit {
  /* Sample toggle on button click is hidden*/
  public isHidden: Boolean = true;

  /* Accepts AppEndPoint object */
  @Input('endpointData') endpointData: AppEndPoint;
  /* Call back on sample toggle */
  @Output('samplesClicked') sampleClicked: EventEmitter<AppClickedSampleRes> = new EventEmitter();
  /* Call back on test button click */
  @Output('testEndPointClicked') testEndPointClicked: EventEmitter<AppClickedTestRes> = new EventEmitter<any>();

  /* Selected wanted response format from endpoint */
  public selectedResponse;
  /* Inputed values from user for each parameter otherwise go default */
  public parameterFields = {};

  constructor() {

  }

  ngOnInit() {
    this.initParameterFields();
    this.initSelectedResponse();
  }

  /* Init the default parameters to the parameter fields */
  private initParameterFields() {
    const params = this.endpointData.parameters;
    for ( const p in params) {
      if (params[p].hasOwnProperty('name')) {
        this.parameterFields[params[p].name] = params[p];
      }
    }
  }

  private initSelectedResponse(){
    this.selectedResponse = this.endpointData.responseTypes.length !== 0 ? this.endpointData.responseTypes[0] : null;;
  }
  public clickTestEndPointButton() {
    return({'selectedResponse': this.selectedResponse, 'parameterFields': this.parameterFields});
  }
}
