import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {SecurityDefinition} from '../../models/auth/security-definition';
import {NotificationsService} from 'angular2-notifications';
import {SwaggerService} from '../../services/swagger.service';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.scss'],
})

export class AuthComponent implements OnInit {
  Object = null;
  public APPLIED_AUTH_MSG = 'Authentication Applied';
  public inputFields = {};

  // Contains the name of the security definition as the key
  @Input('securityDefinitions') securityDefinitions: SecurityDefinition;

  constructor (
    public localStorageService: LocalStorageService,
    public notify: NotificationsService,
    public swaggerService: SwaggerService
  ) {
  }

  ngOnInit() {
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
    this.reapplyPermissionsAccess(this.localStorageService.getSecurityDefinition()).then(() => {
      this.notify.success('Success', this.APPLIED_AUTH_MSG);
    });
  }
  public reapplyPermissionsAccess(securityDef: SecurityDefinition): Promise<any> {
    return this.swaggerService.reInitSwagger(securityDef);
  }
}


