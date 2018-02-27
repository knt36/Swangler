import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SwaggerService } from '../../services/swagger.service';
import { Observable } from 'rxjs/Observable';

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
  sortedApiData: Observable<any> = this.swaggerService.getEndpointsSortedByTags();
  apiData;

  constructor(
    private route: ActivatedRoute,
    private swaggerService: SwaggerService
  ) {
  }

  ngOnInit() {
    this.paramSubscription = this.route.params.subscribe(params => {
      this.endpointTag = params['endpointTag'];

      if ( params['endpointId'] ) {
        this.scrollToId = params['endpointId'];
      }

      this.updateEndpoints();
   });

   this.swaggerService.getApiData().subscribe( data => {

    this.apiData = data;
  });
  }


  updateEndpoints() {
    this.swaggerService.getEndpointsSortedByTags().subscribe( data => {
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
    this.paramSubscription.unsubscribe();
  }
}
