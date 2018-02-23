import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class TestEndpointsService {

  constructor(
    private http: HttpClient
  ) {

    const test = {
      method: 'get',
      url: 'https://httpbin.org/get',
      headers: [
        {
          name: 'test',
          value: 'test'
        }
      ],
      params: [
        {
          name: 'test',
          value: 1
        }
      ],
      payload: {
        'nicePayload': 'test'
      }
    };

    // this.testEndpoint(test)
    //   .subscribe( d => console.log(d));
  }

  testEndpoint(callData) {
    const options = {};
    if (callData.headers) {
      options['headers'] = new HttpHeaders();

      for (let index = 0; index < callData.headers.length; index++) {
        const header = callData.headers[index];
        options['headers'] = options['headers'].append(header.name, header.value);
      }
    }

    if (callData.params) {
      options['params'] = new HttpParams();

      for (let index = 0; index < callData.params.length; index++) {
        const param = callData.params[index];
        options['params'] = options['params'].append(param.name, param.value);
      }
    }

    if (callData.payload && (callData.method === 'put' || 'patch' || 'post')) {
      return this.http[callData.method](callData.url, callData.payload, options);
    } else {
      return this.http[callData.method](callData.url, options);
    }

  }

}
