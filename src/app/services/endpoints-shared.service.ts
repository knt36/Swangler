import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EndpointsSharedService {

  isExamplesHidden = false;

  constructor() {
  }

  endpointsExamplesToggle(value: boolean) {
    this.isExamplesHidden = !this.isExamplesHidden;
    console.log(this.isExamplesHidden);
  }
}
