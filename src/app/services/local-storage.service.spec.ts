import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';
import { SwaggerService } from './swagger.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const apiData = {
  'spec': {
    'securityDefinitions': {
      'test1': {
        'type': 'apiKey',
        'name': 'key1',
        'in': 'header'
      },
      'test2': {
        'type': 'apiKey',
        'name': 'key2',
        'in': 'header'
      }
    }
  }
};

let SwaggerServiceStub: Partial<SwaggerService>;
SwaggerServiceStub = {
  getApiData: () => {
    return Observable.of(apiData);
  }
};


describe('LocalStorageService', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LocalStorageService,
        { provide: SwaggerService, useValue: SwaggerServiceStub }
      ]
    });
    service = TestBed.get(LocalStorageService);
    // spyOn(service.swaggerService, 'getApiData').and.returnValue(Observable.of(apiData));
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
          },
          'test2': {
            'in': 'header',
            'name': 'key2',
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

  it('should get security definitions from storage', fakeAsync(() => {
    service.setStorageVar('test1', 'testValue1');
    service.setStorageVar('test2', 'testValue2');

    const test = service.getSecurityDefinitions();
    tick();

    service.securityDefinitions.subscribe( sd => {
      service.getSecurityDefinitionsValuesFromStorage(sd);
      expect(service.storedSecurityDefinitionsSubject.value).toEqual({'test1': 'testValue1', 'test2': 'testValue2'});
      expect(service.tempSecurityDefinitions).toEqual({'test1': 'testValue1', 'test2': 'testValue2'});
    });
    tick();

    service.storedSecurityDefinitions.subscribe( res => {
      expect(res).toEqual({'test1': 'testValue1', 'test2': 'testValue2'});
    });
  }));
});
