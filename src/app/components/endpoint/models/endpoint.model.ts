import {AppParameter} from "./parameter.model";


export class AppEndPoint{
  public name:string;
  public methodType:string;
  public path:string;
  public desc:string;
  public responseTypes: string[];
  public parameters:AppParameter [];

  constructor(name, methodType, path, desc, responseTypes, parameters){
    this.name = name;
    this.methodType = methodType;
    this.path = path;
    this.desc = desc;
    this.responseTypes = responseTypes;
    this.parameters = parameters;
  }
}
