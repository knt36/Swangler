import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsableNavComponent } from './collapsable-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CollapseModule } from 'ngx-bootstrap';
import { DebugElement, SimpleChanges, SimpleChange } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('CollapsableNavComponent', () => {
  let component: CollapsableNavComponent;
  let fixture: ComponentFixture<CollapsableNavComponent>;
  let collapsableHader: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsableNavComponent ],
      imports: [
        RouterTestingModule,
        CollapseModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsableNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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

});
