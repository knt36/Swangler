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
  public endPointData: AppEndPoint = AppEndPoint.MOCK_DATA as AppEndPoint;
  constructor(public swagger: SwaggerService) {

    this.endPointData = AppEndPoint.MOCK_DATA;
    console.log(this.endPointData);
    this.swagger.getEndpointsSortedByTags().subscribe(res => {
      console.log(res);
      this.swaggerData = res;
    });
  }
  public clickTest(test) {
    console.log(test);
  }

}
