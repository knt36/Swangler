import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AuthComponent } from './auth-component.controller';
import { LocalStorageService } from '../../services/local-storage.service';
import { NotificationsService } from 'angular2-notifications';
import { FormsModule } from '@angular/forms';
import { SwaggerService } from '../../services/swagger.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { SecurityDefinition } from '../../models/auth/security-definition';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const securityDefinition = SecurityDefinition.MOCK_DATA;

const storage = {};
const LocalStorageServiceStub = {
  getStorageVar: (varName) => {
    return storage ? storage[varName] : null;
  },
  securityDefinitions: (() => {
    return Observable.of(securityDefinition);
  })(),
  setStorageVar: (varName, varVal) => {
    storage[varName] = varVal;
  }
};

fdescribe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      imports: [
        FormsModule
      ],
      providers: [
        { provide: LocalStorageService, useValue: LocalStorageServiceStub },
        NotificationsService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    component.securityDefinitions = securityDefinition;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should loop trough imported security defenitions', () => {
    const inputs = fixture.debugElement.queryAll(By.css('.security-definition-input'));

    for (let index = 0; index < inputs.length; index++) {
      const element = inputs[index].nativeElement;
      element.value = 'test';
      element.dispatchEvent(new Event('input'));
    }
    fixture.detectChanges();
    expect(inputs.length).toEqual(2);
    expect(component.inputFields['test1']).toEqual('test');
    expect(component.inputFields['test2']).toEqual('test');

    expect(inputs[0].nativeElement.placeholder).toEqual('test1');
    expect(inputs[1].nativeElement.placeholder).toEqual('test2');
  });

  it('should create inputs object with appropriate key names', () => {
    const inputs = fixture.debugElement.queryAll(By.css('.security-definition-input'));

    for (let index = 0; index < inputs.length; index++) {
      const element = inputs[index].nativeElement;
      element.value = 'test';
      element.dispatchEvent(new Event('input'));
    }
    fixture.detectChanges();
    expect(component.inputFields['test1']).toEqual('test');
    expect(component.inputFields['test2']).toEqual('test');
  });

  it('should apply appropriate data to created inputs', () => {
    const inputs = fixture.debugElement.queryAll(By.css('.security-definition-input'));

    fixture.detectChanges();

    expect(inputs[0].nativeElement.placeholder).toEqual('test1');
    expect(inputs[1].nativeElement.placeholder).toEqual('test2');
  });

  it('should call clickApplyButton on button click', () => {
    spyOn(component, 'clickApplyButton');
    const button = fixture.debugElement.query(By.css('.apply-security-definitions')).nativeElement;

    button.click();
    expect(component.clickApplyButton).toHaveBeenCalled();
  });

  it('should apply security definitions', () => {
    spyOn(component.notify, 'success');

    component.inputFields['test1'] = 'test';
    component.inputFields['test2'] = 'test';

    component.clickApplyButton();

    expect(component.notify.success).toHaveBeenCalled();

    expect(component.localStorageService.getStorageVar('test1')).toEqual('test');
    expect(component.localStorageService.getStorageVar('test2')).toEqual('test');
  });

  it('should init component', () => {
    spyOn(component.localStorageService, 'getStorageVar');
    component.localStorageService.setStorageVar('test1', 'test');
    component.localStorageService.setStorageVar('test2', 'test');
    component.ngOnInit();
    expect(component.localStorageService.getStorageVar).toHaveBeenCalled();
    expect(component.inputFields).toEqual({'test1': 'test', 'test2': 'test'});
  });

});


