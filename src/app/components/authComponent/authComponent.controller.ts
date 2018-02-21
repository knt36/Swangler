import {Component, Input, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'auth-component',
  templateUrl : './authComponent.component.html',
  styleUrls: ['./authComponent.component.scss'],
  encapsulation: ViewEncapsulation.None

})



export class AuthComponent {
  Object = null;

  public mockSecurityDefinitions = {
    'application-id': {
      type: 'apiKey',
      name: 'application-id',
      in: 'header'
    },
    'security-id': {
      type: 'apiKey',
      name: 'application-id',
      in: 'header'
    },
    'apiKey': {
      type: 'apiKey',
      name: 'application-id',
      in: 'header'
    }
  };

  @Input('text') text = {
    header: 'AUTHENTICATION HEADERS:',
    applyButton: 'Apply'
  };
  // Contains the name of the security definition as the key
  @Input('securityDefinitions') securityDefinitions = this.mockSecurityDefinitions;

  constructor() {
    this.Object = Object;
  }
}
