import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';
import { SwaggerService } from './swagger.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NotificationsService } from 'angular2-notifications';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const apiData = {
  'spec': {
    'securityDefinitions': {
      'test1': {
        'type': 'apiKey',
        'name': 'key1',
        'in': 'header'
      }
    }
  }
};

fdescribe('LocalStorageService', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LocalStorageService,
        SwaggerService,
        HttpClient,
        HttpHandler,
        NotificationsService
      ]
    });
    service = TestBed.get(LocalStorageService);
    spyOn(service.swaggerService, 'getApiData').and.returnValue(Observable.of(apiData));
  });

  beforeEach(() => {
    const store = {};

    spyOn(window.localStorage, 'getItem').and.callFake((key) => {
      return store[key];
    });
    spyOn(window.localStorage, 'setItem').and.callFake((key, value) => {
      return store[key] = value + '';
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get security definotions from SwaggerService', fakeAsync(() => {
    const test = service.getSecurityDefinitions();
    tick();
    service.securityDefinitions.subscribe( sd => {
      expect(sd).toEqual(
        {
          'test1': {
            'in': 'header',
            'name': 'key1',
            'type': 'apiKey'
          }
        }
      );
    });
  }));

  it('should set localStorage value', () => {
    service.setStorageVar('testName', 'testValue');

    expect(window.localStorage.setItem).toHaveBeenCalled();
    expect(window.localStorage.getItem('testName')).toEqual('testValue');
    expect(service.tempSecurityDefinitions['testName']).toEqual('testValue');
    service.storedSecurityDefinitions.subscribe(data => {
      expect(data).toEqual({'testName': 'testValue'});
    });
  });

  it('should return localStorage value', () => {
    service.setStorageVar('testName', 'testValue');
    expect(service.getStorageVar('testName')).toEqual('testValue');
  });
});
