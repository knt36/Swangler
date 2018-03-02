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
  sortedApiData: Observable<any> = this.swaggerService.getEndpointsSortedByTags();
  apiData;
  private testModalRef = null;

  constructor(private route: ActivatedRoute,
              private swaggerService: SwaggerService,
              private modalService: BsModalService,
              private localDataService: LocalStorageService) {
  }

  ngOnInit() {
    this.paramSubscription = this.route.params.subscribe(params => {
      this.endpointTag = params['endpointTag'];

      if (params['endpointId']) {
        this.scrollToId = params['endpointId'];
      }

      this.updateEndpoints();
    });

    this.swaggerService.getApiData().subscribe(data => {

      this.apiData = data;
    });
  }


  updateEndpoints() {
    this.swaggerService.getEndpointsSortedByTags().subscribe(data => {
      console.log(data);
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
/*{
  "account_id": {
    "type": "string",
    "required": true,
    "in": "path",
    "name": "account_id"
  },
  "space_id": {
    "type": "string",
    "required": true,
    "in": "path",
    "name": "space_id"
  },
  "body": {
    "type": "object",
    "name": "body",
    "required": true,
    "in": "body",
    "schema": {
      "type": "object",
      "required": [
        "name"
        ],
      "properties": {
        "name": {
          "type": "string",
          "description": "The name of the dataset.",
          "required": true,
          "example": "DemoDataset"
        },
        "image_url_keys": {
          "type": "array",
          "items": {
            "type": "string",
            "example": "imageURL"
          },
          "description": "The keys of the fields containing image_urls for the dataset.",
          "required": null
        },
        "copy_from": {
          "type": "string",
          "description": "The name of another dataset from which settings and items should be copied (if necessary).",
          "required": false,
          "example": "none"
        }
      },
      "name": "body",
      "$$ref": "#/definitions/NewDatasetDoc"
    }
  }
}*/


  clickTest(request) {
    const requestInitiator: RequestInitiator = new RequestInitiator(request, this.localDataService);
    this.swaggerService.testEndpoint(requestInitiator).subscribe( res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }
}
