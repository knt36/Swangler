import {AppParameter} from './parameter.model';
import {AppStatusCode} from './status-code.model';


export class AppEndPoint {

  public static MOCK_DATA = {
    name: 'List The Account',
    methodType: 'get',
    path: '/accounts/',
    desc: 'Get a list of all accounts in the system',
    parameters: [
      {
        name: 'page_number',
        httpPart: 'query',
        type: 'integer',
        value: '20'
      },
      {
        name: 'page_line',
        httpPart: 'path',
        type: 'integer',
        required: true,
        desc: 'The page number to get',
        value: '25'
      },
      {
        name: 'word_number',
        httpPart: 'body',
        type: 'object',
        required: true,
        desc: 'The page number to get',
        value: `{'sample':'value'}`,
        contentType: [
          'application/json'
        ]
      }
    ],
    responseTypes: [
      'application/jsons',
      'soap/xml'
    ],
    statusCodes: [
      {
        code: 200,
        desc: 'Success'
      },
      {
        code: 400,
        desc: 'No Auth'
      },
      {
        code: 500,
        desc: 'Server sided problem?'
      }
    ]
  };

  public name?: string;
  public methodType: string;
  public path: string;
  public desc?: string;
  public responseTypes?: string[];
  public parameters?: AppParameter [];
  public statusCodes?: AppStatusCode [];
}



