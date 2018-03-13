export class Access {
  public endpointPath: string;
  public method: string;
  public isAvailable: boolean;

  constructor(endpointPath: string, method: string, access: boolean) {
    this.endpointPath = endpointPath;
    this.method = method;
    this.isAvailable = access;
  }
}

export class EndpointMethods {
  [methodType: string]: Access | any;
  public push(access: Access) {
    this[access.method] = access;
  }
}

export class EndpointAccesses {
  [endpointPath: string]: EndpointMethods | any;
  constructor() {
  }
  public push(access: Access) {
    if (!this[access.endpointPath]) {
      this[access.endpointPath] = new EndpointMethods();
    }
    this[access.endpointPath].push(access);
  }
}
