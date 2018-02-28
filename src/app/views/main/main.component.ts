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

  constructor(
   ) {}

  ngOnInit() {

  }

}
