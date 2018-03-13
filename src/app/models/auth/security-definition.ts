


export class SecurityDefinition {
  public static MOCK_DATA = {
    'test1': {
      type: 'apiKey',
      name: 'test1',
      in: 'header',
      value: 'slyce'
    },
    'test2': {
      type: 'apiKey',
      name: 'test2',
      in: 'header',
      value: 'slyce'
    }
  };
  [name: string]: SecurityEntity | any;

  constructor() {
  }
  public push?(securityEntity: SecurityEntity) {
    this[securityEntity.name] = securityEntity;
  }
}


export class SecurityEntity {
  public in?: string;
  public name: string;
  public type?: string;
  public value?: string;
  [name: string]: any;

  constructor(name: string, value?: string, inPortion?: string, type?: string, ) {
    this.in = inPortion;
    this.name = name;
    this.type = type;
    this.value = value;
  }
}


