import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppEndPoint} from '../../models/endpoint/endpoint.model';
import {AppClickedSampleRes} from '../../models/endpoint/clicked-sample-res';
import {AppClickedTestRes} from '../../models/endpoint/clicked-test-res';


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
  @Output('clickedSample') clickedSample: EventEmitter<AppClickedSampleRes> = new EventEmitter();
  /* Call back on test button click */
  @Output('clickedTestEndPoint') clickedTestEndPoint: EventEmitter<AppClickedTestRes> = new EventEmitter<any>();

  /* Selected wanted response format from endpoint */
  public selectedResponse;
  /* Inputed values from user for each parameter otherwise go default */
  public parameterFields = {};
  public Object = Object;

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
        params[p].value = params[p].default;
        this.parameterFields[params[p].name] = params[p];
      }
    }
  }

  private initSelectedResponse() {
    this.selectedResponse = this.endpointData.produces.length !== 0 ? this.endpointData.produces[0] : null;
  }
  public clickTestEndPointButton() {
    return({'selectedResponse': this.selectedResponse, 'parameterFields': this.parameterFields});
  }
}
