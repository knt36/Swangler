import {Component, OnInit, OnDestroy, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {SwaggerService} from '../../services/swagger.service';
import {Observable} from 'rxjs/Observable';
import {ModalDirective} from 'ngx-bootstrap';
import {HttpResModalComponent} from '../../components/httpResModalComponent/httpResModal.controller';
import {RequestInitiator} from '../../models/endpoint/endpoint.model';
import {LocalStorageService} from '../../services/local-storage.service';
import * as hl from '../../../../node_modules/highlight.js/';


@Component({
  selector: 'app-endpoints-view',
  templateUrl: './endpoints-view.component.html',
  styleUrls: ['./endpoints-view.component.scss']
})
export class EndpointsViewComponent implements OnInit, OnDestroy {
  endpointTag: string;
  endpoints;
  scrollToId: string = null;
  private paramSubscription: Subscription;
  private queryParamSubscription: Subscription;
  sortedApiData: Observable < any > = this.swaggerService.getEndpointsSortedByTags();
  apiData;
  private modalRef = null;
  public result = {};

  @ViewChild(ModalDirective) modal: ModalDirective;

  onModalShown(type: string, $event: ModalDirective) {
    this.highlightJS();
  }



  constructor(
    private route: ActivatedRoute,
    private swaggerService: SwaggerService,
    private localDataService: LocalStorageService,
  ) {}

  ngOnInit() {
    this.queryParamSubscription = this.route.queryParams.subscribe(queryParams => {
      if (queryParams.enpt) {
        this.scrollToId = queryParams.enpt;
      }
    });

    this.paramSubscription = this.route.params.subscribe(params => {
      this.endpointTag = params['endpointTag'];
      this.updateEndpoints();
    });
    this.swaggerService.getApiData().subscribe(data => {
      this.apiData = data;
    });
  }


  updateEndpoints() {
    this.swaggerService.getEndpointsSortedByTags().subscribe(data => {
      if (data) {
        if (this.endpointTag) {
          this.endpoints = data[this.endpointTag];
        } else {
          this.endpoints = data[Object.keys(data)[0]];
        }
      }
    });
  }

  ngOnDestroy() {
    this.queryParamSubscription.unsubscribe();
    this.paramSubscription.unsubscribe();
  }

  clickTest(request, template) {
    const requestInitiator: RequestInitiator = new RequestInitiator(request, this.localDataService);
    this.swaggerService.testEndpoint(requestInitiator).subscribe( res => {
      this.setRes(res, request);
      this.modal.show();
    }, error => {
      this.setRes(error, request);
      this.result['responseBody'] = JSON.stringify(error.error, null, 2);
      this.modal.show();
    });
  }
  private setRes(res, request) {
    this.result['header'] = request.endPointData.summary;
    this.result['method'] = request.endPointData.method;
    this.result['url'] = res.url;
    this.result['responseBody'] = JSON.stringify(res.body, null, 2);
    this.result['responseCode'] = res.status;
    const keys = res.headers.keys();
    res.headers = keys.map(key =>
      `${key}: ${res.headers.get(key)}`);
    this.result['responseHeader'] = JSON.stringify(res.headers, null, 2);
  }
  private highlightJS() {
    const samples = document.querySelectorAll('.modal-dialog pre code');
    for (let index = 0; index < samples.length; index++) {
      const element = samples[index];
      hl.highlightBlock(element);
    }
  }
}
