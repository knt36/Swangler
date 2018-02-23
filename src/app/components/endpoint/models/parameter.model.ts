


export class AppParameter{
  public name:string;
  public type:number;
  public desc:string;
  public value:string;

  constructor(name, type, desc, value) {
    this.name = name;
    this.type = type;
    this.desc = desc;
    this.value = value;
  }
}
