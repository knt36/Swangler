import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Subscription
} from 'rxjs/Subscription';
import {
  SwaggerService
} from '../../services/swagger.service';
import {
  Observable
} from 'rxjs/Observable';

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

  constructor(
    private route: ActivatedRoute,
    private swaggerService: SwaggerService
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
}
