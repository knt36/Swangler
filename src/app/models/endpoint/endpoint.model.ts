import {LocalStorageService} from '../../services/local-storage.service';

export class AppEndPoint {

  public static MOCK_DATA =
    {
      'operationId': 'API_Keys_create_api_key1',
      'summary': 'Create a new API key',
      'description': 'Create a new API key with a name and access control options.',
      'consumes': [
        'application/json'
      ],
      'produces': [
        'application/json'
      ],
      'tags': [
        'API Keys'
      ],
      'parameters': [
        {
          'type': 'string',
          'required': true,
          'in': 'path',
          'name': 'account_id'
        },
        {
          'type': 'object',
          'name': 'body',
          'required': true,
          'in': 'body',
          'schema': {
            'type': 'object',
            'required': [
              'name'
            ],
            'properties': {
              'name': {
                'type': 'string',
                'description': 'The name of the API key',
                'required': true,
                'example': 'DemoAPIKey'
              },
              'acl': {
                'type': 'object',
                'properties': {},
                'description': 'The access control list as an object with the operation as the key and the permission status as a boolean',
                'example': {
                  'create-space': false,
                  'get-space-by-id': true
                }
              }
            },
            'name': 'body',
            '$$ref': '#/definitions/NewAPIKeyDoc'
          }
        }
      ],
      'responses': {
        '200': {
          'description': 'Successful Operation',
          'schema': {
            'type': 'object',
            'required': [],
            'properties': {
              'topic': {
                'type': 'string',
                'description': '???',
                'example': 'fg01-evt-global'
              },
              'msg_type': {
                'type': 'string',
                'description': 'The type of message',
                'example': 'job-created'
              },
              'account_id': {
                'type': 'string',
                'description': 'The account id related to the job',
                'example': '848c0271-d307-426b-9291-6d99f17039a3'
              },
              'task_id': {
                'type': 'string',
                'description': 'The task id'
              },
              'created_by': {
                'type': 'string',
                'description': 'Task created by',
                'example': 'system'
              },
              'job_id': {
                'type': 'string',
                'description': 'The job id',
                'example': 'db36cc07-6f28-421a-afd4-88288b625fee'
              },
              'name': {
                'type': 'string',
                'description': 'The name of the job',
                'example': 'job-name'
              },
              'process_status': {
                'type': 'object',
                'required': [],
                'properties': {
                  'status': {
                    'type': 'integer',
                    'format': 'int64',
                    'description': 'The current job status id',
                    'example': 1
                  },
                  'display': {
                    'type': 'string',
                    'description': 'The current job status text',
                    'example': 'Queued'
                  }
                },
                '$$ref': '#/definitions/ProcessStatusDoc'
              }
            },
            '$$ref': '#/definitions/NewJobDoc'
          }
        },
        '409': {
          'description': 'API Key Already Exists'
        }
      },
      'security': [
        {
          'slyce-account-id': []
        }
      ],
      '__originalOperationId': 'API Keys.create_api_key',
      'url': '/accounts/{account_id}/api-keys/',
      'method': 'post'
    };

  public consumes: string[];
  public description?: string;
  public method: string;
  public operationId: string;
  public parameters: Parameter[];
  public produces: string[];
  public responses: Responses;
  public security: SecurityRequirement[];
  public summary: string;
  public tags: string[];
  public url: string;
}

/* SHARED */

export class Parameter {
  public in: string;
  public name: string;
  public required: boolean;
  public type: string;
  public schema?: RequestSchema;
  public default?: any;
  public example?: any;
  public description?: string;
  public format?: string;
  public value?: any;
}

export class Schema {
  public type: string;
  public $$ref?: string;
  public description?: string;
  public required?: any;
}

/* APP_END_POINT */

export class SecurityRequirement {
  [name: string]: Array<any>;
}
/* REQUEST */
export class RequestSchema extends Schema {
  public static MOCK_DATA = {
      'type': 'object',
      'required': [
        'name'
      ],
      'properties': {
        'name': {
          'type': 'string',
          'description': 'The name of the API key',
          'required': true,
          'example': 'DemoAPIKey'
        },
        'acl': {
          'type': 'object',
          'properties': {},
          'description': 'The access control list as an object with the operation as the key and the permission status as a boolean',
          'example': {
            'create-space': false,
            'get-space-by-id': true
          }
        }
      },
      'name': 'body',
      '$$ref': '#/definitions/NewAPIKeyDoc'
    };
  public name: string;
  public required: string[];
  public properties: RequestProperties;
  public description?: string;
  public example?: object;
}

export class RequestProperty {
  public description?: string;
  public type: string;
  public example?: any;
  public required?: boolean;
}

export class RequestProperties {
  [name: string]: RequestProperty | Schema;
}

/* RESPONSE */
export class Responses {
  [code: string]: Response;
}

export class Response {
  public description: string;
  public schema?: ResponseSchema;
}

export class ResponseSchema extends Schema {
  public static MOCK_DATA =  {
    'type': 'object',
    'required': [],
    'properties': {
      'topic': {
        'type': 'string',
        'description': '???',
        'example': 'fg01-evt-global'
      },
      'msg_type': {
        'type': 'string',
        'description': 'The type of message',
        'example': 'job-created'
      },
      'account_id': {
        'type': 'string',
        'description': 'The account id related to the job',
        'example': '848c0271-d307-426b-9291-6d99f17039a3'
      },
      'task_id': {
        'type': 'string',
        'description': 'The task id'
      },
      'created_by': {
        'type': 'string',
        'description': 'Task created by',
        'example': 'system'
      },
      'job_id': {
        'type': 'string',
        'description': 'The job id',
        'example': 'db36cc07-6f28-421a-afd4-88288b625fee'
      },
      'name': {
        'type': 'string',
        'description': 'The name of the job',
        'example': 'job-name'
      },
      'process_status': {
        'type': 'object',
        'required': [],
        'properties': {
          'status': {
            'type': 'integer',
            'format': 'int64',
            'description': 'The current job status id',
            'example': 1
          },
          'display': {
            'type': 'string',
            'description': 'The current job status text',
            'example': 'Queued'
          }
        },
        '$$ref': '#/definitions/ProcessStatusDoc'
      }
    },
    '$$ref': '#/definitions/NewJobDoc'
  };
  public required?: boolean[];
  public properties: ResponseProperties;

}

export class ResponseProperty {
  public description?: string;
  public type: string;
  public example?: any;
  public required?: any [];
}


export class ResponseProperties {
  [name: string]: ResponseProperty | Schema;
}

export class RequestInitiator {
  public static MOCK_DATA?: any = {
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

  public url: string;
  public headers: RequestEntry = {};
  public method: string;
  [httpPart: string]: RequestEntry | any;
  constructor(request, localDataService: LocalStorageService) {
    // console.log(request);
    this.method = request.endPointData.method;
    this.url = request.endPointData.url;
    request.endPointData.security.forEach( item => {
      if ( item ) {
        Object.keys(item).forEach(secRequirement => {
          this.addHeader(secRequirement, localDataService.getStorageVar(secRequirement));
        });
      }
    });

    if (request.selectedResponse) {
      this.setContentType(request.selectedResponse);
    }
    if (request.parameterFields) {
      Object.keys(request.parameterFields).forEach(entry => {
        if (!this[request.parameterFields[entry].in]) {
          this[request.parameterFields[entry].in] = {};
        }
        if (entry.toLowerCase() === 'body') {
          this[request.parameterFields[entry].in] = request.parameterFields[entry].value;
        } else {
          this[request.parameterFields[entry].in][entry] = request.parameterFields[entry].value;
        }
      });
    }
  }
  public setContentType(contentType: string) {
    this.headers['Content-Type'] = contentType;
  }

  public addHeader(headerKey: string, headerValue: string) {
    this.headers[headerKey] = headerValue;
  }
}

export class RequestEntry {
  [entryName: string]: string;
}
