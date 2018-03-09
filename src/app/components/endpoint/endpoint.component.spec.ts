///<reference path="../../../../node_modules/@angular/core/testing/src/component_fixture.d.ts"/>
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointComponent } from './endpoint.component';
import {FormsModule} from '@angular/forms';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AppEndPoint} from '../../models/endpoint/endpoint.model';
import {EndpointsSharedService} from '../../services/endpoints-shared.service';
import {NotificationsService} from 'angular2-notifications';
import {By} from '@angular/platform-browser';

describe('EndpointComponent', () => {

  @Component({
    selector: 'app-example-side-bar',
    template: '<span></span>'
  })
  class ExampleSideBarComponent {
    @Input('endpoint') endpoint: AppEndPoint;
    @Output('clickedBodySample') clickedBodySample: EventEmitter<any> = new EventEmitter();
  }
  let component: EndpointComponent;
  let fixture: ComponentFixture<EndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EndpointComponent,
        ExampleSideBarComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        EndpointsSharedService,
        NotificationsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointComponent);
    component = fixture.componentInstance;
    component.endpointData = AppEndPoint.MOCK_DATA;
    this.endpointsSharedService = TestBed.get(EndpointsSharedService);
    fixture.detectChanges();
  });
  it('should check if smoothScroll is called without failure', () => {
    component.smoothScroll(1, 1000);
    component.smoothScroll(1000, 1);
  });
  it('should initSelectedResponse with data from endpointData', () => {
    component.ngOnInit();
    try {
      expect(component.selectedResponse).toEqual(component.endpointData.produces[0]);
    } catch ( e ) {
      fail('endpointData.produces array is empty');
    }
  });
  it('should initParameterFields with endpointData', () => {
    component.ngOnInit();
    (component.endpointData).parameters.forEach( parm => {
      if (component.parameterFields[parm.name]) {
        if (parm.example) {
          if (!component.parameterFields[parm.name] === parm.example) {
            fail();
          }
        }
      } else {
        fail();
      }
    });
    expect().nothing();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should populate .param-property with data from endpointData.parameters ', () => {
    component.endpointData = AppEndPoint.MOCK_DATA;
    fixture.detectChanges();
    component.endpointData.parameters.forEach( parm => {
      const element = fixture.debugElement.query(By.css(`#${parm.name}`));
      expect(element.query(By.css('span')).nativeElement.textContent).toEqual(parm.name + ':');
      expect(element.query(By.css('em')).nativeElement.textContent).toEqual(parm.in);
    });
  });

  it('should not crash on null id', () => {
    component.endpointData.operationId = undefined;
    try {
      fixture.detectChanges();
      expect(true).toBeTruthy();
    } catch (e) {
      fail();
    }
  });
  it('should change grid layout on endpointSharedService.isExamplesHidden == true', () => {
    const exampleHiddenClasses = [
      'col-lg-9',
      'col-xl-9'
    ];
    component.endpointsSharedService.isExamplesHidden = true;
    fixture.detectChanges();
    const classes = fixture.debugElement.query(By.css('#gridChange')).classes;
    exampleHiddenClasses.forEach(classItem => {
      if (!classes[classItem]) {
        fail('Missing class: ' + classItem);
      }
    });
    expect(true).toBeTruthy();
  });

  it('should change grid layout on endpointSharedService.isExamplesHidden == false', () => {
    const exampleNotHiddenClasses = [
      'col-lg-6',
      'col-xl-6'
    ];
    component.endpointsSharedService.isExamplesHidden = false;
    fixture.detectChanges();
    const classes = fixture.debugElement.query(By.css('#gridChange')).classes;
    exampleNotHiddenClasses.forEach(classItem => {
      if (!classes[classItem]) {
        fail('Missing class: ' + classItem);
      }
    });
    expect(true).toBeTruthy();
  });

  it('should not crash on null endpointData.summary', () => {
    component.endpointData.summary = undefined;
    try {
      fixture.detectChanges();
      expect(true).toBeTruthy();
    } catch (e) {
      fail('crashed on endpointData.summary == undefined');
    }
  });

  it('should not show empty badge on null endpointData.method', () => {
    component.endpointData.method = undefined;
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('#methodBadge')).length).toBeFalsy();
  });

  it('should not crash on null endpointData.method', () => {
    component.endpointData.method = undefined;
    try {
      fixture.detectChanges();
      expect(true).toBeTruthy();
    } catch (e) {
      fail('crashed on endpointData.method == undefined');
    }
  });

  it('should not crash on null endpointData.url', () => {
    component.endpointData.url = undefined;
    try {
      fixture.detectChanges();
      expect(true).toBeTruthy();
    } catch (e) {
      fail('crashed on endpointData.url == undefined');
    }
  });
  it('should not show #url on null endpointData.url', () => {
    component.endpointData.url = undefined;
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('#url')).length).toBeFalsy();
  });
  it('should show #url on valid endpointData.url', () => {
    component.endpointData.url = 'www.google.com';
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('#url')).length).toBeTruthy();
  });
  it('should not show #description on null endpointData.description', () => {
    component.endpointData.description = undefined;
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('#description')).length).toBeFalsy();
  });
  it('should show #description on valid endpointData.description', () => {
    component.endpointData.description = 'something';
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('#description')).length).toBeTruthy();
  });
  it('should activate endpointSharedService.endpointsExamplesToggle() on clicking #toggle-examples', () => {
    const oldValueIsExamplesHidden = component.endpointsSharedService.isExamplesHidden;
    fixture.debugElement.query(By.css('#toggle-examples')).triggerEventHandler('click', null);
    expect(component.endpointsSharedService.isExamplesHidden).toEqual(!oldValueIsExamplesHidden);
  });
  it('should trigger clickedToggleExamples on clicking #toggle-examples', () => {
    spyOn(component, 'clickedToggleExamples').and.callThrough();
    fixture.debugElement.query(By.css('#toggle-examples')).triggerEventHandler('click', null);
    expect(component.clickedToggleExamples).toHaveBeenCalled();
  });
  it('should display "Show Samples" when isExamplesHidden from service is true', () => {
    component.endpointsSharedService.isExamplesHidden = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.sampleState')).nativeElement.textContent).toEqual('Show Samples');
  });
  it('should display "Hide Samples" when isExamplesHidden from service is false', () => {
    component.endpointsSharedService.isExamplesHidden = false;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.sampleState')).nativeElement.textContent).toEqual('Hide Samples');
  });
  it('should not crash when endpointData.parameters == null ', () => {
    component.endpointData.parameters = undefined;
    try {
      fixture.detectChanges();
      expect().nothing();
    } catch (e) {
      fail('crashed due to endpointData.parameters == undefined');
    }
  });
  it('should initSelectedResponse with null if data from endpointData produces is null', () => {
    component.endpointData.produces = undefined;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.selectedResponse).toEqual(null);
  });
});
