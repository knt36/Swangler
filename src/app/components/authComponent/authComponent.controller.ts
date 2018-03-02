import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {SecurityDefinition} from '../../models/auth/security-definition';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-auth-component',
  templateUrl: './authComponent.component.html',
  styleUrls: ['./authComponent.component.scss'],
})

export class AuthComponent {
  Object = null;
  public APPLIED_AUTH_MSG = 'Authentication Applied';
  public inputFields = {};

  // Contains the name of the security definition as the key
  @Input('securityDefinitions') securityDefinitions: SecurityDefinition;
  @Output('clickedApplyBut') clickedApplyBut: EventEmitter<any> = new EventEmitter<any>();

  constructor(public localStorageService: LocalStorageService, public notify: NotificationsService) {
    this.Object = Object;
    this.localStorageService.securityDefinitions.subscribe(res => {
      this.securityDefinitions = res as SecurityDefinition;

      for (const sd in this.securityDefinitions) {
        if (this.securityDefinitions.hasOwnProperty(sd)) {
          const sdObj = this.securityDefinitions[sd];
          const localStorageVal = this.localStorageService.getStorageVar(sdObj.name);
          if (localStorageVal) {
            this.inputFields[sd] = localStorageVal;
          }
        }
      }
    });
  }
  public clickApplyButton() {
    for (const i in this.inputFields) {
      if (this.inputFields.hasOwnProperty(i)) {
        this.localStorageService.setStorageVar(i, this.inputFields[i]);
      }
    }
    this.notify.success(this.APPLIED_AUTH_MSG);
  }
}


