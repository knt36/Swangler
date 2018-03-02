import {Component, OnInit, OnDestroy, TemplateRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {SwaggerService} from '../../services/swagger.service';
import {Observable} from 'rxjs/Observable';
import {BsModalService} from 'ngx-bootstrap';
import {HttpResModalComponent} from '../../components/httpResModalComponent/httpResModal.controller';
import {RequestInitiator} from '../../models/endpoint/endpoint.model';
import {LocalStorageService} from '../../services/local-storage.service';

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


  constructor(
    private route: ActivatedRoute,
    private swaggerService: SwaggerService,
    private localDataService: LocalStorageService,
    private modalService: BsModalService
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
      console.log(res);
      this.result['url'] = res.url;
      this.result['responseBody'] = JSON.stringify(res.body, null, 2);
      this.result['responseCode'] = res.status;

      const keys = res.headers.keys();
      res.headers = keys.map(key =>
        `${key}: ${res.headers.get(key)}`);
      this.result['responseHeader'] = JSON.stringify(res.headers, null, 2);
      this.modalRef = this.modalService.show(template);
    }, error => {
      console.log(error);
      this.result['url'] = error.url;
      this.result['responseBody'] = JSON.stringify(error.error, null, 2);
      this.result['responseCode'] = error.status;
      const keys = error.headers.keys();
      error.headers = keys.map(key =>
        `${key}: ${error.headers.get(key)}`);
      this.result['responseHeader'] = JSON.stringify(error.headers, null, 2);
      this.modalRef = this.modalService.show(template);
    });
  }
}
