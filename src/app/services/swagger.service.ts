import { Injectable } from '@angular/core';
const Swagger = require('swagger-client');
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SwaggerService {
  specUrl = 'http://petstore.swagger.io/v2/swagger.json';
  apiDataSubject: BehaviorSubject<any>;

  constructor() {
    this.apiDataSubject = new BehaviorSubject(undefined);

    this.initSwagger()
      .then(apiData => {
        this.setApiData(apiData);

        console.log(apiData);

        const request = {
          operationId: 'findPetsByStatus',
          parameters: { 'status': 'available'},
          securities: { 'petstore_auth': 'slyce'},
          requestInterceptor: (res) => {
            const headers = new Headers();
            headers.append( 'petstore_auth', 'slyce' );
            // res.headers = headers;
            console.log(headers);
            console.log(res.headers)
          }
        };


        apiData.execute({
          ...request
        })
          .then( d => d );



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
