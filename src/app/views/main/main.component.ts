import { Component, OnInit } from '@angular/core';
import {AppEndPoint} from '../../models/endpoint/endpoint.model';
import { SwaggerService } from '../../services/swagger.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainViewComponent implements OnInit {

  sortedApiData: Observable<any> = this.swaggerService.getEndpointsSortedByTags();
  apiData;

  public appEndPoint: AppEndPoint = AppEndPoint.MOCK_DATA;
  constructor(
    private swaggerService: SwaggerService
   ) {}

  ngOnInit() {
    this.swaggerService.getApiData().subscribe( data => {
      console.log(data);

      this.apiData = data;
    });
  }

}
