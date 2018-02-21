import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  apiData: Observable<any>;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
  }

}
