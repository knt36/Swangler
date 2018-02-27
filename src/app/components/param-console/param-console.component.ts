import {Component, Input, OnInit} from '@angular/core';
import {Schema} from '../../models/endpoint/endpoint.model';

@Component({
  selector: 'app-param-console',
  templateUrl: './param-console.component.html',
  styleUrls: ['./param-console.component.scss']
})
export class ParamConsoleComponent implements OnInit {
  public static readonly OPTIONAL = '(optional)';
  public static readonly REQUIRED = '(required)';
  public Object = Object;
  public getFieldRequirementTextFunc = ParamConsoleComponent.getFieldRequirementText;
  @Input('schema') schema: Schema;
  public static getFieldRequirementText(isRequired: Boolean) {
    return(isRequired ? this.REQUIRED : this.OPTIONAL);
  }
  ngOnInit() {
  }
}

