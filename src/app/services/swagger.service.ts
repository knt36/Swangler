import { Injectable } from '@angular/core';
const Swagger = require('swagger-client');
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SwaggerService {
  specUrl = 'http://forge.local/openapi/spec.json';
  apiDataSubject: BehaviorSubject<any>;

  constructor() {
    this.apiDataSubject = new BehaviorSubject(undefined);

    this.initSwagger()
      .then(apiData => {
        this.setApiData(apiData);
      })
      .catch(err => console.error(err));
  }

  setApiData(apiData) {
    this.apiDataSubject.next(apiData);
  }

  getApiData(): Observable<any> {
    return this.apiDataSubject.asObservable();
  }

  initSwagger(): Promise<any> {
    return Swagger(this.specUrl);
  }

}
