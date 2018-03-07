import { TestBed, inject } from '@angular/core/testing';

import { SwaggerService } from './swagger.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NotificationsService } from 'angular2-notifications';
import { AppEndPoint } from '../models/endpoint/endpoint.model';

const endpointMockData = { 'Test Endpoint': AppEndPoint.MOCK_DATA };

console.log(endpointMockData);


fdescribe('SwaggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwaggerService, HttpClient, HttpHandler, NotificationsService]
    });
  });

  it('should be created', inject([SwaggerService], (service: SwaggerService) => {
    expect(service).toBeTruthy();
  }));

  it('should substitute path', inject([SwaggerService], (service: SwaggerService) => {
    const res: string = service.substitutePath('test.com/{param}', { param: 'test-param' });
    expect(res).toEqual('test.com/test-param');
  }));

  it('should set API Data', inject([SwaggerService], (service: SwaggerService) => {
    service.getApiData()
      .subscribe( res => {
        if (res) {
          expect(res).toEqual('test');
        }
      });

    service.setApiData('test');
    expect(service.apiDataSubject.getValue()).toEqual('test');
  }));

  it('should set sorted endpoints', inject([SwaggerService], (service: SwaggerService) => {
    service.getEndpointsSortedByTags()
      .subscribe( res => {
        if (res) {
          expect(res).toEqual('test');
        }
      });

    service.setSortedEndpoints('test');
    expect(service.endpointsSubject.getValue()).toEqual('test');
  }));


});
