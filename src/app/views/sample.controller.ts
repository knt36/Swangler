import {
  Component,
  OnInit
} from '@angular/core';
import {
  SwaggerService
} from '../services/swagger.service';
import {AppEndPoint} from '../models/endpoint/endpoint.model';


@Component({
  selector: 'app-sample-view',
  templateUrl: './sample.view.html'
})

export class SampleViewComponent {
  public swaggerData = [];
  public endPointData: AppEndPoint = AppEndPoint.MOCK_DATA;
  constructor(public swagger: SwaggerService) {
    this.swagger.getEndpointsSortedByTags().subscribe(res => {
      console.log(res);
      this.swaggerData = res;
    });
  }
  public clickTest(test) {
    console.log(test);
  }

}
