import { Injectable } from '@angular/core';
const Swagger = require('swagger-client');
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import { Subject } from 'rxjs/Subject';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class SwaggerService {
  private apiDataSubject: BehaviorSubject<any>;
  private endpointsSubject: BehaviorSubject<any>;

  constructor(
    private http: HttpClient
  ) {
    this.apiDataSubject = new BehaviorSubject(null);
    this.endpointsSubject = new BehaviorSubject(null);

    const specUrl = 'http://petstore.swagger.io/v2/swagger.json';
    this.initSwagger(specUrl);

    // for testing purposes

    // this.getApiData().subscribe( a => {
    //   console.log(this.sortApiEndpointsByTags(a.spec.paths));
    // });

    // const postRequest = {
    //   url: 'http://forge.local/accounts/',
    //   method: 'post',
    //   headers: {
    //     'slyce-account-id': 'slyce',
    //     'Content-Type': 'application/json'
    //   },
    //   body: {
    //     'id': '3212312',
    //     'name': '31231.'
    //   }
    // };

    // const getRequest = {
    //   url: 'http://forge.local/accounts/',
    //   method: 'get',
    //   headers: {
    //     'slyce-account-id': 'slyce',
    //     'Content-Type': 'application/json'
    //   },
    //   params: {
    //     'page_number': 1,
    //     'page_size': 20
    //   }
    // };

    // this.testEndpoint(postRequest)
    //   .subscribe( a => console.log(a));

    // this.testEndpoint(getRequest)
    //   .subscribe( a => console.log(a));

    // setTimeout( () => {
    //   this.setSpecUrl('http://petstore.swagger.io/v2/swagger.json');
    // }, 3000);

    // end for testing purposes
  }

  testEndpoint(callData) {
    const options = {};

    if (callData.headers) {
      options['headers'] = new HttpHeaders();

      for (const headerName in callData.headers) {
        if (callData.headers.hasOwnProperty(headerName)) {
          const headerValue = callData.headers[headerName];
          options['headers'] = options['headers'].append(headerName, headerValue);
        }
      }
    }

    if (callData.params) {
      options['params'] = new HttpParams();

      for (const paramName in callData.params) {
        if (callData.params.hasOwnProperty(paramName)) {
          const paramValue = callData.params[paramName];
          options['params'] = options['params'].append(paramName, paramValue);
        }
      }
    }

    if (callData.body && (callData.method === 'put' || 'patch' || 'post')) {
      return this.http[callData.method](callData.url, callData.body, options);
    } else {
      return this.http[callData.method](callData.url, options);
    }

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

  setSpecUrl(url) {
    this.initSwagger(url);
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

  private initSwagger(specUrl): Promise<any> {
    return Swagger(specUrl)
      .then( apiData => {
        this.setApiData(apiData);
        this.setSortedEndpoints(this.sortApiEndpointsByTags(apiData.spec.paths));
      })
      .catch( err => console.error(err) );
  }
}
