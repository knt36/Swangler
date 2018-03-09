import {Component, EventEmitter, Input, OnInit, Output, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import {AppEndPoint} from '../../models/endpoint/endpoint.model';
import {AppClickedSampleRes} from '../../models/endpoint/clicked-sample-res';
import {AppClickedTestRes} from '../../models/endpoint/clicked-test-res';
import {LocalStorageService} from '../../services/local-storage.service';
import {SwaggerService} from '../../services/swagger.service';
import { EndpointsSharedService } from '../../services/endpoints-shared.service';
import { NotificationsService } from 'angular2-notifications';


@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.scss']
})
export class EndpointComponent implements OnInit, OnChanges, AfterViewInit {
  /* Sample toggle on button click is hidden*/
  public isHidden: Boolean;


  @Input() scrollToId: string;
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
  isExamplesHidden;

  constructor(
    public endpointsSharedService: EndpointsSharedService,
    public notify: NotificationsService
  ) {
  }

  ngOnInit() {
    this.initParameterFields();
    this.initSelectedResponse();

    // this.endpointsSharedService.onEndpointsExamplesToggle()
    //   .subscribe( value => {
    //     this.isExamplesHidden = value;
    //   });
  }

  ngAfterViewInit() {
    if ( this.endpointData.operationId === this.scrollToId ) {
      this.scrollToElem(this.scrollToId);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if ( changes.scrollToId.currentValue ) {
      if ( this.endpointData.operationId === changes.scrollToId.currentValue ) {
        this.scrollToElem(changes.scrollToId.currentValue);
      }
    } else if ( changes.scrollToId.currentValue === null ) {
      this.scrollToElem();
    }
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

  private scrollToElem(id?: string) {
    if ( id ) {
      const elem = document.getElementById(id);
      if (elem) {
        window.scrollTo(0, elem.offsetTop + 56);
        // this.smoothScroll(document.documentElement.scrollTop || document.body.scrollTop, elem.offsetTop);
      }
    } else {
      window.scrollTo(0, 0 + 56);
      // this.smoothScroll(document.documentElement.scrollTop || document.body.scrollTop, 0);
    }
  }

  smoothScroll (currentPosition, targetPosition) {

    if (currentPosition < targetPosition) {
      // scroll down
      let i = currentPosition;
      const interval = setInterval(() => {
        window.scrollTo(0, i);
        i += 100;
        if ( i >= targetPosition ) {
          window.scrollTo(0, targetPosition + 56);
          clearInterval(interval);
        }
      }, 15);

    } else {
      // scoll up
      let i = currentPosition;
      const interval = setInterval(() => {
        window.scrollTo(0, i);
        i -= 100;
        if ( i <= targetPosition ) {
          window.scrollTo(0, targetPosition + 56);
          clearInterval(interval);
        }
      }, 15);

    }
  }

  tryEndpointRequest(endpointForm) {
    const invalidFields = [];
    for (const key in endpointForm.controls) {
      if (endpointForm.controls.hasOwnProperty(key)) {
        const element = endpointForm.controls[key];
        if (element.invalid) {
          invalidFields.push(key);
        }
      }
    }

    if (endpointForm.invalid) {
      this.notify.error('Error', invalidFields.join(', ') + ' required!');
    }

    this.clickedTestEndPoint.emit(this.clickTestEndPointButton());
  }

  populateBody(event) {
    this.parameterFields['body'].value = event;
  }

  private initSelectedResponse() {
    this.selectedResponse = this.endpointData.produces ? this.endpointData.produces[0] : null;
  }
  public clickTestEndPointButton() {
    return ( new AppClickedTestRes(this.endpointData, this.selectedResponse, this.parameterFields));
  }
  public clickedToggleExamples() {
    this.endpointsSharedService.endpointsExamplesToggle();
  }
}
