import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Location, CommonModule } from '@angular/common';
import { CollapsableNavComponent } from './collapsable-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CollapseModule } from 'ngx-bootstrap';
import { DebugElement, SimpleChanges, SimpleChange, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Routes, Router } from '@angular/router';
import {CollapsableNavEndpointsModel} from '../../models/sidebar/collapsable-nav.model';

@Component({
  selector: 'app-dummy-component',
  template: '<span></span>'
})
class DummyComponent {
}

const MOCK_ENDPOINT_NO_SUMMARY = {
  'operationId': 'weld_highlighter',
  'consumes': [
    'application/json'
  ],
  'produces': [
    'application/json'
  ],
  'parameters': [],
  'responses': {
    '200': {
      'description': 'Successful Operation'
    }
  },
  'security': [
    {
      'slyce-account-id': []
    },
    {
      'slyce-api-key': []
    }
  ],
  '__originalOperationId': 'weld_highlighter',
  'url': '/weld_highlighter',
  'method': 'get'
};

const routes: Routes = [
  { path: '', component: DummyComponent },
  { path: ':endpointTag', component: DummyComponent, },
  { path: ':endpointTag/:endpointId', component: DummyComponent, },
  { path: '**', component: DummyComponent }
];

describe('CollapsableNavComponent', () => {
  let component: CollapsableNavComponent;
  let fixture: ComponentFixture<CollapsableNavComponent>;
  let collapsableHader: DebugElement;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsableNavComponent, DummyComponent ],
      imports: [
        CollapseModule.forRoot(),
        RouterTestingModule.withRoutes(routes)
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsableNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should toggleExpand on .collapsable-nav-header click', async(() => {
    spyOn(component, 'toggleExpand');
    expect(component.isCollapsed).toBeTruthy();

    collapsableHader = fixture.debugElement.query(By.css('.collapsable-nav-header'));
    collapsableHader.triggerEventHandler('click', null);

    expect(component.toggleExpand).toHaveBeenCalled();
  }));


  it('should set isCollapsed to true if Inputs tag and sectionToExpand are same', () => {
      expect(component.isCollapsed).toBeTruthy();

      component.sectionToExpand = 'test';
      component.tag = 'test';
      component.ngAfterContentInit();

      expect(component.isCollapsed).toBeFalsy();
    });


  it('should change isCollapsed', () => {
    component.tag = 'test';
    component.isCollapsed = true;
    expect(component.isCollapsed).toBeTruthy();

    component.ngOnChanges(
      { sectionToExpand: new SimpleChange(null, 'test', null) }
    );

    expect(component.isCollapsed).toBeFalsy();
  });


  it('should go to given tag page', fakeAsync(() => {
    component.tag = 'test';

    fixture.detectChanges();

    collapsableHader = fixture.debugElement.query(By.css('.navigate-to-tag'));
    collapsableHader.nativeElement.click();

    tick();
    expect(location.path()).toBe('/test');
  }));

  it('should set link names for endpoints that has no summary field', fakeAsync(() => {
    component.tag = 'test';
    component.endpoints = new Array<CollapsableNavEndpointsModel>();
    component.isCollapsed = false;
    component.endpoints.push(MOCK_ENDPOINT_NO_SUMMARY);
    fixture.detectChanges();
    const collasableEntry = fixture.debugElement.query(By.css('#navLink' + 0));
    expect(collasableEntry.nativeElement.textContent).toEqual(component.endpoints[0].operationId);
  }));

  it('should return operation id if summary is not available', fakeAsync(() => {
    expect(component.getNavLinkName(MOCK_ENDPOINT_NO_SUMMARY)).toEqual(MOCK_ENDPOINT_NO_SUMMARY.operationId);
  }));
});
