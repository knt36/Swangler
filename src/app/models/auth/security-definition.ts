


export class SecurityDefinition {
  public MOCK_DATA = {
    'slyce-account-id': {
      type: 'apiKey',
      name: 'slyce-account-id',
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
