import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {SecurityDefinition} from '../../models/auth/security-definition';

@Component({
  selector: 'app-auth-component',
  templateUrl: './authComponent.component.html',
  styleUrls: ['./authComponent.component.scss'],
})

export class AuthComponent {
  Object = null;

  public inputFields = {};

  @Input('text') text = {
    header: 'AUTHENTICATION HEADERS:',
    applyButton: 'Apply'
  };
  // Contains the name of the security definition as the key
  @Input('securityDefinitions') securityDefinitions: SecurityDefinition;
  @Output('clickedApplyBut') clickedApplyBut: EventEmitter<any> = new EventEmitter<any>();

  constructor(public localStorageService: LocalStorageService) {
    this.Object = Object;
    this.localStorageService.securityDefinitions.subscribe(res => {
      this.securityDefinitions = res;
      console.log(res);
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


