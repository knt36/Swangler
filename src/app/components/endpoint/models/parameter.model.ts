


export class AppParameter {

  public static MOCK_DATA = {
    name: "page_number",
    httpPart: 'query',
    type: "integer",
    required: true,
    desc: "The page number to get",
    value: "20"
  }


  public name: string;
  public httpPart: string;
  public type: number;
  public required: boolean;
  public desc: string;
  public value: string;

  constructor(obj: Object) {
    for (const k in obj) {
      if (this.hasOwnProperty(k)) {
        this[k] = obj[k];
      }
    }
  }
}
