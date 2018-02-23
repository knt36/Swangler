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
    //   url: 'http://forge.local/accounts/',
    //   method: 'post',
    //   headers: { 'slyce-account-id': 'slyce' },
    //   body: {
    //     'id': '123',
    //     'name': 's,123123Inc.'
    //   }
    // };

    // this.executeRequest(request)
    //   .then( a => console.log(a));

    // setTimeout( () => {
    //   this.setSpecUrl('http://petstore.swagger.io/v2/swagger.json');
    // }, 3000);

    // end for testing purposes
  }

  executeRequest(requestData) {
    const requestResponse = new Promise( (resolve, reject) => {
      this.getApiData()
        .first()
        .subscribe( apiData => {
          apiData.http({
            ...requestData
          })
          .then( response => resolve(response) )
          .catch( err => reject(err) );
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
