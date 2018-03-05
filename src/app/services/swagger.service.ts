import { Injectable } from '@angular/core';
const Swagger = require('swagger-client');
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {RequestInitiator} from '../models/endpoint/endpoint.model';
import {Config} from 'codelyzer/index';

@Injectable()
export class SwaggerService {
  private apiDataSubject: BehaviorSubject<any>;
  private endpointsSubject: BehaviorSubject<any>;
  private specUrl = 'http://forge.local/openapi/spec.json';
  public specHost = 'http://forge.local';

  constructor(
    private http: HttpClient
  ) {
    this.apiDataSubject = new BehaviorSubject(null);
    this.endpointsSubject = new BehaviorSubject(null);


    this.initSwagger(this.specUrl);

    // for testing purposes

    // this.getApiData().subscribe( a => {
    //   console.log(this.sortApiEndpointsByTags(a.spec.paths));
    // });

    // const postRequest = {
    //   url: 'http://forge.local/accounts/',
    //   method: 'post',
    //   headers: {
    //     'slyce-account-id': 'slyce',
    //     'Content-Type': 'application/json'ng lin
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

  testEndpoint(callData: RequestInitiator): Observable<any> {
    const options = { observe: 'response' };
    if (callData.headers) {
      options['headers'] = new HttpHeaders();

      for (const headerName in callData.headers) {
        if (callData.headers.hasOwnProperty(headerName)) {
          const headerValue = callData.headers[headerName];
          options['headers'] = options['headers'].append(headerName, headerValue);
        }
      }
    }

    if (callData.query) {
      options['params'] = new HttpParams();
      for (const queryName in callData.query) {
        if (callData.query.hasOwnProperty(queryName)) {
          const queryValue = callData.query[queryName];
          options['params'] = options['params'].append(queryName, queryValue);
        }
      }
    }

    if (callData.body && (callData.method === 'put' || 'patch' || 'post')) {
      return this.http[callData.method]<Config>(this.specHost + this.substitutePath(callData.url, callData.path), callData.body, options);
    } else {
      return this.http[callData.method]<Config>(this.specHost + this.substitutePath(callData.url, callData.path), options);
    }

  }

  private substitutePath(path, pathObject): string {
    if (pathObject) {
      Object.keys(pathObject).forEach( key => {
        path = path.replace('{' + key + '}', pathObject[key]);
      });
    }
    return(path);
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
  private setHostUrl(apiData) {
    if ( apiData) {
      if (apiData.host) {
        this.specHost = apiData.host;
      } else if (apiData.url) {
        this.specHost = this.specHost = apiData.url.match('(https*:\\/\\/[^\\/]*\\/)')[0];
      }
    }
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
