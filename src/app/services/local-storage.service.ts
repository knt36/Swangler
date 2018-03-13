import { Injectable } from '@angular/core';
import { SwaggerService } from './swagger.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {SecurityDefinition, SecurityEntity} from '../models/auth/security-definition';

@Injectable()
export class LocalStorageService {
  private storedSecurityDefinitionsSubject: BehaviorSubject<any>;
  private tempSecurityDefinitions: Object = {};

  // Security Definitions obj from swagger spec
  securityDefinitions: Observable<Object>;

  // Security Definitions stored in localStorage with values
  storedSecurityDefinitions: Observable<Array<Object>>;

  constructor(
    public swaggerService: SwaggerService
  ) {
    this.storedSecurityDefinitionsSubject = new BehaviorSubject(undefined);
    this.storedSecurityDefinitions = this.storedSecurityDefinitionsSubject.asObservable();

    // get securityDefinitions from swagger spec file
    this.getSecurityDefinitions();

    // get storedSecurityDefinitions from localStorage if exist
    this.securityDefinitions
      .subscribe(data => {
        if (data) {
          this.getSecurityDefinitionsValuesFromStorage(data);
        }
      });
  }

  getSecurityDefinitionsValuesFromStorage(securityDefinitionObj) {
    const securityDefinitionsDict: Object = {};
    for (const securityDefinition in securityDefinitionObj) {
      if (securityDefinitionObj.hasOwnProperty(securityDefinition)) {
        const securityDefinitionVal = this.getStorageVar(securityDefinition);
        if (securityDefinitionVal) {
          securityDefinitionsDict[securityDefinition] = securityDefinitionVal;
        }
      }
    }
    this.tempSecurityDefinitions = securityDefinitionsDict;
    this.storedSecurityDefinitionsSubject.next(securityDefinitionsDict);
  }

  getSecurityDefinitions() {
    this.securityDefinitions = this.swaggerService.getApiData()
      .map( data => {
        if (data) {
          return data.spec.securityDefinitions;
        }
      });
  }

  setStorageVar(varName, varValue) {
    window.localStorage.setItem(varName, varValue);
    this.tempSecurityDefinitions[varName] = varValue;
    this.storedSecurityDefinitionsSubject.next(this.tempSecurityDefinitions);
  }

  getStorageVar(varName) {
    return window.localStorage.getItem(varName);
  }
  getSecurityDefinition(): SecurityDefinition {
    const securitydef = new SecurityDefinition();
    if (this.tempSecurityDefinitions ) {
      Object.keys( this.tempSecurityDefinitions ).forEach( def => {
        securitydef.push(new SecurityEntity(def, this.tempSecurityDefinitions[def]));
      });
      return(securitydef);
    }
    return(securitydef);
  }
}
