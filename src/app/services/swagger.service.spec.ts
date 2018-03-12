import { TestBed, inject, tick, fakeAsync } from '@angular/core/testing';

import { SwaggerService } from './swagger.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NotificationsService } from 'angular2-notifications';
import { AppEndPoint, RequestInitiator } from '../models/endpoint/endpoint.model';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from './local-storage.service';

const endpointsMockData = [{ 'test': AppEndPoint.MOCK_DATA }];

const LocalStorageServiceStub: Partial<LocalStorageService> = {
  getStorageVar: (varName) => {
    return 'test';
  }
};

const requestMockData = RequestInitiator.MOCK_DATA;

describe('SwaggerService', () => {
  let service: SwaggerService;
  let localStorageService: LocalStorageService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SwaggerService,
        HttpClient,
        HttpHandler,
        NotificationsService,
        { provide: LocalStorageService, useValue: LocalStorageServiceStub }
      ]
    });
    service = TestBed.get(SwaggerService);
    localStorageService = TestBed.get(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should substitute path', () => {
    let res: string = service.substitutePath('test.com/{param}', { param: 'test-param' });
    expect(res).toEqual('test.com/test-param');

    res = service.substitutePath('test.com/{param1}/{param2}', { 'param1': 'test-param1', 'param2': 'test-param2'});
    expect(res).toEqual('test.com/test-param1/test-param2');

    res = service.substitutePath('test.com/{param1}/test/{param2}', { 'param1': 'test-param1', 'param2': 'test-param2'});
    expect(res).toEqual('test.com/test-param1/test/test-param2');
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
  it('should sort endpoints by tags even if endpoint has no tags -> default to NO_TAGS', () => {
    const endpointsMockDataClone = JSON.parse(JSON.stringify(endpointsMockData));
    endpointsMockDataClone[0].test.tags = undefined;
    console.log(endpointsMockDataClone);
    const res = service.sortApiEndpointsByTags(endpointsMockDataClone);
    console.log(res);
    // tag from AppEndPoint.MOCK_DATA.tags property
    expect(Object.keys(res)[0]).toEqual('NO_TAG');

    // meaning this is an array
    expect(res['NO_TAG'].length).toEqual(1);
  });

  it('should set host URL', () => {
    service.setHostUrl({ 'url': 'http://forge.local/openapi/spec.json', 'spec': { 'host': null, schemes: ['http'] } });
    expect(service.specHost).toEqual('http://forge.local');

    service.setHostUrl({ 'url': 'http://forge.local/openapi/spec.json', 'spec': { 'host': 'test.com', schemes: ['https'] } });
    expect(service.specHost).toEqual('https://test.com');

    service.setHostUrl({ 'url': 'http://forge.local/openapi/spec.json', 'spec': { 'host': 'test.com', schemes: [] } });
    expect(service.specHost).toEqual('http://test.com');

    service.setHostUrl({ 'url': 'http://forge.local/openapi/spec.json' });
    expect(service.specHost).toEqual('http://forge.local');

    service.setHostUrl({ 'url': 'http://forge.local/openapi/spec.json', 'spec': { 'host': 'test.com', schemes: [], basePath: '/v2' } });
    expect(service.specHost).toEqual('http://test.com/v2');
  });

  it('should call initSwagger', () => {
    spyOn(service, 'initSwagger');
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

  it('should build endpoint options', fakeAsync(() => {
    const endpointOptions = service.buildEndpointOptions(new RequestInitiator(requestMockData, localStorageService));

    expect(endpointOptions['observe']).toEqual('response');
    expect(endpointOptions['headers'].get('slyce-account-id')).toEqual('test');
    expect(endpointOptions['headers'].get('slyce-api-key')).toEqual('test');
    expect(endpointOptions['headers'].get('content-type')).toEqual('application/json');
    expect(endpointOptions['params'].get('page_number')).toEqual(1);
    expect(endpointOptions['params'].get('page_size')).toEqual(20);
  }));

  it('should test endpoint', fakeAsync(() => {
    spyOn(service, 'testEndpoint').and.returnValue(Observable.of(true));
    let result;
    service.testEndpoint(null).subscribe(res => result = res);
    tick();
    expect(result).toBeTruthy();
  }));

});
