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

const requestMockData = {
  'selectedResponse': 'application/json',
  'parameterFields': {
    'page_number': {
      'type': 'integer',
      'format': 'int64',
      'description': 'The page number to get',
      'default': 1,
      'example': 1,
      'required': false,
      'in': 'query',
      'name': 'page_number',
      'value': 1
    },
    'page_size': {
      'type': 'integer',
      'format': 'int64',
      'description': 'The number of items to return',
      'default': 20,
      'example': 20,
      'required': false,
      'in': 'query',
      'name': 'page_size',
      'value': 20
    }
  },
  'endPointData': {
    'operationId': 'Accounts_create_account2',
    'summary': 'List the accounts',
    'description': 'Get a list of all accounts in the system.',
    'consumes': [
      'application/json'
    ],
    'produces': [
      'application/json'
    ],
    'tags': [
      'Accounts'
    ],
    'parameters': [
      {
        'type': 'integer',
        'format': 'int64',
        'description': 'The page number to get',
        'default': 1,
        'example': 1,
        'required': false,
        'in': 'query',
        'name': 'page_number',
        'value': 1
      },
      {
        'type': 'integer',
        'format': 'int64',
        'description': 'The number of items to return',
        'default': 20,
        'example': 20,
        'required': false,
        'in': 'query',
        'name': 'page_size',
        'value': 20
      }
    ],
    'responses': {
      '200': {
        'description': 'Successful Operation',
        'schema': {
          'type': 'object',
          'properties': {
            'items': {
              'type': 'array',
              'items': {
                'type': 'object',
                'required': [],
                'properties': {
                  'created_at': {
                    'type': 'string',
                    'format': 'date-time',
                    'description': 'The timestamp the item was created',
                    'example': '2018-01-04T20:13:55.373557+0000'
                  },
                  'created_by': {
                    'type': 'string',
                    'description': 'The user that created the item',
                    'example': 'system'
                  },
                  'updated_at': {
                    'type': 'string',
                    'format': 'date-time',
                    'description': 'The timestamp the item was last updated',
                    'example': '2018-01-04T20:13:55.373557+0000'
                  },
                  'updated_by': {
                    'type': 'string',
                    'description': 'The user that last updated the item',
                    'example': 'system'
                  },
                  'id': {
                    'type': 'string',
                    'description': 'The account id',
                    'example': 'test_inc'
                  },
                  'name': {
                    'type': 'string',
                    'description': 'The name of the account',
                    'example': 'Test, Inc.'
                  },
                  'is_active': {
                    'type': 'boolean',
                    'description': 'Whether an account is active or not.'
                  }
                },
                '$$ref': '#/definitions/AccountDoc'
              }
            },
            'page_number': {
              'type': 'integer',
              'format': 'int64',
              'description': 'The current page number',
              'example': 1
            },
            'page_size': {
              'type': 'integer',
              'format': 'int64',
              'description': 'The number of items returned',
              'example': 20
            },
            'total_pages': {
              'type': 'integer',
              'format': 'int64',
              'description': 'The total number of pages available',
              'example': 1
            },
            'total_items': {
              'type': 'integer',
              'format': 'int64',
              'description': 'The total number of items available',
              'example': 1
            }
          }
        }
      }
    },
    'security': [
      {
        'slyce-account-id': []
      },
      {
        'slyce-api-key': []
      }
    ],
    '__originalOperationId': 'Accounts.create_account',
    'url': '/accounts/',
    'method': 'get'
  }
};

fdescribe('SwaggerService', () => {
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
