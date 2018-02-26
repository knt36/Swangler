import {Component, Input, ViewEncapsulation} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';


@Component({
  selector: 'app-http-res-modal',
  templateUrl : './httpResModal.component.html',
  styleUrls: ['./httpResModal.component.scss'],
  encapsulation: ViewEncapsulation.None

})




export class HttpResModalComponent {
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

  public mockObject = {
    header: 'content'
  };


   constructor() {

  }
}


