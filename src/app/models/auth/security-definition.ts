


export class SecurityDefinition {
  public static MOCK_DATA = {
    'test1': {
      type: 'apiKey',
      name: 'test1',
      in: 'header'
    },
    'test2': {
      type: 'apiKey',
      name: 'test',
      in: 'header'
    }
  };
  [name: string]: SecurityEntity;
}


export class SecurityEntity {
  public in: string;
  public name: string;
  public type: string;
}


