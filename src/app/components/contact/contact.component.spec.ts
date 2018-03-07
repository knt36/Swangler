
import { ContactComponent } from './contact.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ContactModel} from '../../models/contact.model';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('ContactComponent (with beforeEach)', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let compDebug: DebugElement;
  let titleHTML;
  let emailContact;
  let version;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    component.contactData = ContactModel.MOCK_DATA;
    fixture.detectChanges();
    compDebug = fixture.debugElement;
    titleHTML = fixture.debugElement.query(By.css('.card-title')).nativeElement;
    emailContact = fixture.nativeElement.querySelector('a');
    version = fixture.debugElement.query(By.css('#version')).nativeElement;
  });
  it('should create', () => {
    expect(component).toBeDefined();
  });
  describe('Title', () => {
    it('should be populated with title', () => {
      component.contactData = ContactModel.MOCK_DATA;
      fixture.detectChanges();
      expect(titleHTML.textContent).toEqual(ContactModel.MOCK_DATA.title);
    });
    it('should be not display with empty title', () => {
      component.contactData = ContactModel.MOCK_DATA;
      component.contactData.title = undefined;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.card-title')).nativeElement.textContent).toEqual('');
    });
  });
  describe('Api Version', () => {
    it('should be labeled api version:', () => {
      const elementDebug = compDebug.query(By.css('#apiVersionLabel'));
      const e: HTMLElement = elementDebug.nativeElement;
      expect(e.textContent).toEqual('api version:');
    });
    it('should be populated with apiVersion', () => {
      component.contactData = ContactModel.MOCK_DATA;
      fixture.detectChanges();
      expect(version.textContent).toEqual(ContactModel.MOCK_DATA.version);
    });
    it('should not show on empty apiVersion', () => {
      component.contactData = ContactModel.MOCK_DATA;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('versionContainer'))).not.toBeTruthy();
    });
  });
  describe('Email Contact', () => {
    it('should be labeled Contact', () => {
      component.contactData = ContactModel.MOCK_DATA;
      fixture.detectChanges();
      const elementDebug = compDebug.query(By.css('#emailContactLabel'));
      const e: HTMLElement = elementDebug.nativeElement;
      expect(e.textContent).toEqual('Contact');
    });
    it('should be populated with emailContact', () => {
      component.contactData = ContactModel.MOCK_DATA;
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('a').textContent).toEqual(ContactModel.MOCK_DATA.contact.email);
    });
    it('should be not show when emailContact is empty', () => {
      component.contactData = ContactModel.MOCK_DATA;
      component.contactData.contact.email = undefined;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('#emailContactContainer'))).toEqual(null);
    });
  });
});
