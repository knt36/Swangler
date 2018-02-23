import {
  Component,
  OnInit
} from '@angular/core';
import {
  SwaggerService
} from '../services/swagger.service';


@Component({
  selector: 'app-sample-view',
  templateUrl: './sample.view.html'
})

export class SampleViewComponent {

  constructor() {
  }

  accounts = {
    'post': {
      'operationId': 'Accounts.create_account',
      'summary': 'Create a new account',
      'description': 'Create a new account.',
      'consumes': [
        'application/json'
      ],
      'produces': [
        'application/json'
      ],
      'tags': [
        'Accounts'
      ],
      'parameters': [{
        'type': 'object',
        'name': 'body',
        'required': true,
        'in': 'body',
        'schema': {
          '$ref': '#/definitions/NewAccountDoc'
        }
      }],
      'responses': {
        '200': {
          'description': 'Successful Operation',
          'schema': {
            'type': 'object',
            '$ref': '#/definitions/NewJobDoc'
          }
        },
        '202': {
          'description': 'Processing request.'
        }
      }
    }
  };

  public sampleContent2 = {
    type: 'schema',
    data: {
      header: 'Monster Pets',
      fields: [
        {
          fieldName: 'id',
          type: 'integer',
          required: 'true',
          details: 'pet status in store',
          validValues: [
            'available'
          ]
        },
        {
          fieldName: 'petType',
          type: 'string',
          required: 'true',
          details: 'pet status in store',
          validValues: [
            'available',
            'pending',
            'dead',
            'abandoned',
            'crippled for life',
            'sold'
          ]
        },
        {
          fieldName: 'petName',
          type: 'boolean',
          required: 'false',
          details: 'pet status in store',
          validValues: [
            'available',
            'pending',
            'sold'
          ]
        },
        {
          fieldName: 'combatLevel',
          type: 'integer',
          required: 'false',
          details: 'pet status in store',
          validValues: null
        }
      ]
    }
  };


  public sampleContent1 = {
    type: 'sample',
    data: "" +
    "{" +
    "'type':'hello'" +
    "}" +
    ""
  };

  data = {
    'accounts': {
      'post': {
        'operationId': 'Accounts.create_account',
        'summary': 'Create a new account',
        'description': 'Create a new account.',
        'consumes': [
          'application/json'
        ],
        'produces': [
          'application/json'
        ],
        'tags': [
          'Accounts'
        ],
        'parameters': [{
          'type': 'object',
          'name': 'body',
          'required': true,
          'in': 'body',
          'schema': {
            '$ref': '#/definitions/NewAccountDoc'
          }
        }],
        'responses': {
          '200': {
            'description': 'Successful Operation',
            'schema': {
              'type': 'object',
              '$ref': '#/definitions/NewJobDoc'
            }
          },
          '202': {
            'description': 'Processing request.'
          },
          '400': {
            'description': 'Bad request.'
          },
          '409': {
            'description': 'An account with that name already exists.'
          }
        },
        'security': []
      },
      'get': {
        'operationId': 'Accounts.create_account',
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
        'parameters': [{
            'type': 'integer',
            'format': 'int64',
            'description': 'The page number to get',
            'default': 1,
            'example': 1,
            'required': false,
            'in': 'query',
            'name': 'page_number'
          },
          {
            'type': 'integer',
            'format': 'int64',
            'description': 'The number of items to return',
            'default': 20,
            'example': 20,
            'required': false,
            'in': 'query',
            'name': 'page_size'
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
                    '$ref': '#/definitions/AccountDoc'
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
        'security': [{
          'slyce-account-id': []
        }]
      }
    },
    'datasets': {
      'post': {
        'operationId': 'Accounts.create_account',
        'summary': 'Create a new account',
        'description': 'Create a new account.',
        'consumes': [
          'application/json'
        ],
        'produces': [
          'application/json'
        ],
        'tags': [
          'Accounts'
        ],
        'parameters': [{
          'type': 'object',
          'name': 'body',
          'required': true,
          'in': 'body',
          'schema': {
            '$ref': '#/definitions/NewAccountDoc'
          }
        }],
        'responses': {
          '200': {
            'description': 'Successful Operation',
            'schema': {
              'type': 'object',
              '$ref': '#/definitions/NewJobDoc'
            }
          },
          '202': {
            'description': 'Processing request.'
          },
          '400': {
            'description': 'Bad request.'
          },
          '409': {
            'description': 'An account with that name already exists.'
          }
        },
        'security': []
      },
      'get': {
        'operationId': 'Accounts.create_account',
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
        'parameters': [{
            'type': 'integer',
            'format': 'int64',
            'description': 'The page number to get',
            'default': 1,
            'example': 1,
            'required': false,
            'in': 'query',
            'name': 'page_number'
          },
          {
            'type': 'integer',
            'format': 'int64',
            'description': 'The number of items to return',
            'default': 20,
            'example': 20,
            'required': false,
            'in': 'query',
            'name': 'page_size'
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
                    '$ref': '#/definitions/AccountDoc'
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
        'security': [{
          'slyce-account-id': []
        }]
      }
    }
  };

}
