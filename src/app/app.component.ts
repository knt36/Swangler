import { Component, OnInit } from '@angular/core';
import { SwaggerService } from './services/swagger.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  apiData: Observable<any>;

  constructor(private swaggerService: SwaggerService) {}

  ngOnInit() {
    this.swaggerService.getApiData()
      .subscribe( data => console.log(data) );
  }

}
