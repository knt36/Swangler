import { Injectable } from '@angular/core';
const Swagger = require('swagger-client');
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SwaggerService {
  private apiDataSubject: Subject<any>;

  constructor() {
    this.apiDataSubject = new Subject();

    const specUrl = 'http://forge.local/openapi/spec.json';
    this.initSwagger(specUrl);

    // for testing purposes

    // this.getApiData().subscribe( a => console.log(a));

    // const request = {
    //   operationId: 'Accounts_create_account2',
    //   parameters: { 'page_number': 1, 'page_size': 20 },
    //   securities: { 'slyce-account-id': 'slyce' },
    // };

    // this.executeRequest(request)
    //   .then( a => console.log(a));

    // setTimeout( () => {
    //   this.setSpecUrl('http://petstore.swagger.io/v2/swagger.json');
    // }, 3000);

    // end for testing purposes
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

    const requestResponse = new Promise( (resolve, reject) => {
      this.getApiData()
        .first()
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

    return requestResponse;

  }

  private setApiData(apiData) {
    this.apiDataSubject.next(apiData);
  }

  getApiData(): Observable<any> {
    return this.apiDataSubject.asObservable();
  }

  setSpecUrl(url) {
    this.initSwagger(url);
  }

  private initSwagger(specUrl): Promise<any> {
    return Swagger(specUrl)
      .then( apiData => this.setApiData(apiData) )
      .catch( err => console.error(err) );
  }
}
