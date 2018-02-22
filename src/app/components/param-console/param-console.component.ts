import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-param-console',
  templateUrl: './param-console.component.html',
  styleUrls: ['./param-console.component.scss']
})
export class ParamConsoleComponent implements OnInit {
  public Object = null;

  public mockData = {
    header: 'Pets',
    fields : [
      {
        fieldName: 'id',
        type: 'integer',
        required:'true',
        details: 'pet status in store',
        validValues: [
          'available'
        ]
      },
      {
        fieldName: 'petType',
        type: 'string',
        required:'true',
        details: 'pet status in store',
        validValues: [
          'available',
          'pending',
          'dead',
          'abandoned',
          'crippled for life',
          'sold'
        ]
      },
      {
        fieldName: 'petName',
        type: 'boolean',
        required:'false',
        details: 'pet status in store',
        validValues: [
          'available',
          'pending',
          'sold'
        ]
      },
      {
        fieldName: 'combatLevel',
        type: 'integer',
        required:'false',
        details: 'pet status in store',
        validValues: null
      }
    ]
  };

  public test = "test";

  @Input('data') data = this.mockData;

  constructor() {
    this.Object = Object;
    console.log(this.mockData);
  }

  ngOnInit() {
  }

  public getRequiredText(bool: string): string{
    if(bool.toLowerCase() == 'false'){
      return('optional');
    }else{
      return('required');
    }
  }

}
