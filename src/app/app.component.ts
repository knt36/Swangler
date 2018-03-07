import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LocalStorageService} from './services/local-storage.service';
import {AppEndPoint} from './models/endpoint/endpoint.model';
import {SwaggerService} from './services/swagger.service';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sortedApiData: Observable<any> = this.swaggerService.getEndpointsSortedByTags();
  apiData;

  public appEndPoint: AppEndPoint = AppEndPoint.MOCK_DATA;
  public options = {
    timeOut: 3000,
    showProgressBar: false,
    pauseOnHover: false,
    clickToClose: false,
    position: ['bottom', 'right']
};

  constructor(private swaggerService: SwaggerService) {
  }

  ngOnInit() {
    this.swaggerService.getApiData().subscribe(data => {
      this.apiData = data;
    });
  }

}
