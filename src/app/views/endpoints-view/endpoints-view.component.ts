import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SwaggerService } from '../../services/swagger.service';

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
  }

  updateEndpoints() {
    this.swaggerService.getEndpointsSortedByTags().subscribe( data => {
      if (data) {
        if (this.endpointTag) {
          this.endpoints = data[this.endpointTag];
        } else {
          this.endpoints = data[0];
        }
      }
    });
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

}
