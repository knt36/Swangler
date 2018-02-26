import { Component, OnInit } from '@angular/core';
import {AppEndPoint} from '../../models/endpoint/endpoint.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainViewComponent implements OnInit {

  public appEndPoint: AppEndPoint = AppEndPoint.MOCK_DATA;
  constructor() { }

  ngOnInit() {
  }

}
