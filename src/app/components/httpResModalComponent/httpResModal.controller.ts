import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-http-res-modal',
  templateUrl : './httpResModal.component.html',
  styleUrls: ['./httpResModal.component.scss'],
})

export class HttpResModalComponent implements OnInit {

  public mockTextData = {
    title: 'Update an account',
    methodType: 'Post',
    fields: [
      {
        fieldName: 'Request URL',
        fieldValue: 'http://forge.local/accounts/dfsa'
      },
      {
        fieldName: 'Response Body',
        fieldValue: '{\n' +
        '  "error": "Access denied."\n' +
        '}'
      },
      {
        fieldName: 'Response Code',
        fieldValue: '403'
      }
    ]
  };
  @Input ('data') data = this.mockTextData;
   constructor() {
  }

  ngOnInit(): void {
   }
}


