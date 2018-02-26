import {Component, Input, ViewEncapsulation} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';


@Component({
  selector: 'app-auth-component',
  templateUrl : './authComponent.component.html',
  styleUrls: ['./authComponent.component.scss'],
})



export class AuthComponent {
  Object = null;

  public inputFields = {};

  // Contains the name of the security definition as the key
  @Input('securityDefinitions') securityDefinitions = {};

  constructor(public localStorageService: LocalStorageService) {
    this.Object = Object;
    this.localStorageService.securityDefinitions.subscribe(res => {
      this.securityDefinitions = res;
    });
  }
  public clickApplyButton() {
    for (const i in this.inputFields) {
      if (this.inputFields.hasOwnProperty(i)) {
        this.localStorageService.setStorageVar(i, this.inputFields[i]);
      }
    }
  }

}
