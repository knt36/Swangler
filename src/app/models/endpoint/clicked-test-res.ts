import {AppParameter} from "./parameter.model";

export class AppClickedTestRes{
  public static MOCK_DATA = {
    selectedResponse:'application/JSON',
    parameterFields: {
      name: "page_number",
      httpPart: 'query',
      type: "integer",
      required: true,
      desc: "The page number to get",
      value: "20"
    }
  }

  public selectedResponse?: string;
  public parameterFields?: AppParameter [];
}
