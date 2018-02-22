import { Injectable } from '@angular/core';
const Swagger = require('swagger-client');
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SwaggerService {
  specUrl = 'http://petstore.swagger.io/v2/swagger.json';
  apiDataSubject: BehaviorSubject<any>;
  endpointsSubject: BehaviorSubject<any>;

  constructor() {
    this.apiDataSubject = new BehaviorSubject(undefined);
    this.endpointsSubject = new BehaviorSubject(undefined);

    this.initSwagger()
      .then(apiData => {
        this.setApiData(apiData);

        const apiTags = apiData.spec.tags;
        const endpoints = apiData.spec.paths;

        const sortedEndpoints = {};

        for (let index = 0; index < apiTags.length; index++) {
          const tag = apiTags[index].name;
          sortedEndpoints[tag] = this.getApiEndpointsByTag(endpoints, tag);
        }

        this.setSortedEndpoints(sortedEndpoints);

        this.getEndpointsSortedByTags()
          .subscribe( d => console.log(d));
      })
      .catch(err => console.error(err));
  }

  setApiData(apiData) {
    this.apiDataSubject.next(apiData);
  }

  setSortedEndpoints(sortedEndpoints) {
    this.endpointsSubject.next(sortedEndpoints);
  }

  getEndpointsSortedByTags() {
    return this.endpointsSubject.asObservable();
  }

  getApiData(): Observable<any> {
    return this.apiDataSubject.asObservable();
  }

  getApiTags(): Observable<any> {
    return this.apiDataSubject.asObservable()
      .map(data => data.spec.tags);
  }

  getApiEndpointsByTag(endpoints, tag): Array<any> {
    const taggedEndpoints: Array<any> = [];

    for (const pathKey in endpoints) {
      if (endpoints.hasOwnProperty(pathKey)) {
        const path = endpoints[pathKey];

        for (const methodKey in path) {
          if (path.hasOwnProperty(methodKey)) {
            const method = path[methodKey];

            if (method.tags.filter( elem => elem === tag ).length) {
              method.url = pathKey;
              method.method = methodKey;
              taggedEndpoints.push(method);
            }
          }
        }

      }
    }

    return taggedEndpoints;
  }

  initSwagger(): Promise<any> {
    return Swagger(this.specUrl);
  }

}
