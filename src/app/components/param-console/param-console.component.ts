import {Component, Input, OnInit} from '@angular/core';
import {Schema} from '../../models/endpoint/endpoint.model';

@Component({
  selector: 'app-param-console',
  templateUrl: './param-console.component.html',
  styleUrls: ['./param-console.component.scss']
})
export class ParamConsoleComponent implements OnInit {
  public readonly OPTIONAL = '(optional)';
  public readonly REQUIRED = '(required)';
  public Object = Object;
  @Input('schema') schema: Schema;
  public getFieldRequirementText(isRequired: Boolean) {
    return(isRequired ? this.REQUIRED : this.OPTIONAL);
  }
  ngOnInit() {
  }
}

