import { Injectable } from '@angular/core';
const Swagger = require('swagger-client');
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SwaggerService {
  private specUrl = 'http://forge.local/openapi/spec.json';
  private apiDataSubject: BehaviorSubject<any>;
  private endpointsSubject: BehaviorSubject<any>;

  private tags: Object = {};

  constructor() {
    this.apiDataSubject = new BehaviorSubject(undefined);
    this.endpointsSubject = new BehaviorSubject(undefined);

    this.initSwagger()
      .then(apiData => {
        this.setApiData(apiData);

        const endpoints = apiData.spec.paths;

        const sortedEndpoints = this.sortApiEndpointsByTags(endpoints);

        this.setSortedEndpoints(sortedEndpoints);

        this.getEndpointsSortedByTags()
          .subscribe( d => console.log(d));
      })
      .catch(err => console.error(err));
  }

  private setApiData(apiData) {
    this.apiDataSubject.next(apiData);
  }

  private setSortedEndpoints(sortedEndpoints) {
    this.endpointsSubject.next(sortedEndpoints);
  }

  getEndpointsSortedByTags(): Observable<any> {
    return this.endpointsSubject.asObservable();
  }

  getApiData(): Observable<any> {
    return this.apiDataSubject.asObservable();
  }

  getApiTags(): Observable<any> {
    return this.apiDataSubject.asObservable()
      .map(data => data.spec.tags);
  }

  private sortApiEndpointsByTags(endpoints): Array<Array<Object>> {
    const result = [];

    for (const pathKey in endpoints) {
      if (endpoints.hasOwnProperty(pathKey)) {
        const path = endpoints[pathKey];

        for (const methodKey in path) {
          if (path.hasOwnProperty(methodKey)) {
            const method = path[methodKey];

            method.tags.filter( tag => {

              if (!result[tag]) {
                result[tag] = [];
              }

              method.url = pathKey;
              method.method = methodKey;
              result[tag].push(method);

            });

          }
        }

      }
    }

    return result;
  }

  private initSwagger(): Promise<any> {
    return Swagger(this.specUrl);
  }

}
