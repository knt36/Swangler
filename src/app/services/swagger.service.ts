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

        console.log(apiData);

      })
      .catch(err => console.error(err));


      const request = {
        operationId: 'Accounts_create_account2',
        parameters: { 'page_number': 1, 'page_size': 20},
        securities: { 'slyce-account-id': 'slyce'},
      };

      this.executeRequest(request)
        .then( a => console.log(a));
  }

  executeRequest(requestData) {
    const request = {
      operationId: requestData.operationId,
      parameters: requestData.parameters,
      securities: requestData.securities,
      requestInterceptor: (req) => {

        const headers = new Headers();

        for (const key in requestData.securities) {
          if (requestData.securities.hasOwnProperty(key)) {
            const element = requestData.securities[key];
            headers.append( key, element );
          }
        }

        req.headers = headers;
      }
    };

    const promise = new Promise( (resolve, reject) => {
      this.getApiData()
        .subscribe( apiData => {
          if (apiData) {
            apiData.execute({
              ...request
            })
            .then( response => resolve(response) )
            .catch( err => reject(err) );
          }
        });
    });

    return promise;

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
