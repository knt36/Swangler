import { TestBed, inject, tick, fakeAsync, flushMicrotasks } from '@angular/core/testing';

import { SwaggerService } from './swagger.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { NotificationsService } from 'angular2-notifications';
import { AppEndPoint } from '../models/endpoint/endpoint.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';

const endpointsMockData = [{ 'test': AppEndPoint.MOCK_DATA }];

describe('SwaggerService', () => {
  let service: SwaggerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SwaggerService,
        HttpClient,
        HttpHandler,
        NotificationsService
      ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    });
    service = TestBed.get(SwaggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should substitute path', () => {
    const res: string = service.substitutePath('test.com/{param}', { param: 'test-param' });
    expect(res).toEqual('test.com/test-param');
  });

  it('should set API Data', () => {
    service.getApiData()
      .subscribe( res => {
        if (res) {
          expect(res).toEqual('test');
        }
      });

    service.setApiData('test');
    expect(service.apiDataSubject.getValue()).toEqual('test');
  });

  it('should set sorted endpoints', () => {
    service.getEndpointsSortedByTags()
      .subscribe( res => {
        if (res) {
          expect(res).toEqual('test');
        }
      });

    service.setSortedEndpoints('test');
    expect(service.endpointsSubject.getValue()).toEqual('test');
  });


  it('should sort endpoints by tags', () => {
    const res = service.sortApiEndpointsByTags(endpointsMockData);

    // tag from AppEndPoint.MOCK_DATA.tags property
    expect(Object.keys(res)[0]).toEqual('API Keys');

    // meaning this is an array
    expect(res['API Keys'].length).toEqual(1);
  });

  it('should set host URL', () => {
    service.setHostUrl({ 'url': 'http://forge.local/openapi/spec.json', 'spec': { 'host': null, schemes: ['http'] } });
    expect(service.specHost).toEqual('http://forge.local');

    service.setHostUrl({ 'url': 'http://forge.local/openapi/spec.json', 'spec': { 'host': 'test.com', schemes: ['https'] } });
    expect(service.specHost).toEqual('https://test.com');
  });

  it('should call initSwagger', () => {
    spyOn(service, 'initSwagger').and.returnValue(true);
    service.setSpecUrl('');
    expect(service.initSwagger).toHaveBeenCalled();
  });

  it('should return promise', fakeAsync(() => {
    spyOn(service, 'initSwagger').and.returnValue(Promise.resolve(true));
    let result;
    service.initSwagger('test').then(data => result = data);
    tick();
    expect(result).toBeTruthy();
  }));

  it('should test endpoint', fakeAsync(inject([HttpTestingController], (backend: HttpTestingController) => {
    spyOn(service, 'testEndpoint').and.returnValue(Observable.of(true));
    let result;
    service.testEndpoint().subscribe(res => result = res);
    tick();
    expect(result).toBeTruthy();
  })));

});
