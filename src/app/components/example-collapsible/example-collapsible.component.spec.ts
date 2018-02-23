import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCollapsibleComponent } from './example-collapsible.component';

describe('ExampleCollapsibleComponent', () => {
  let component: ExampleCollapsibleComponent;
  let fixture: ComponentFixture<ExampleCollapsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleCollapsibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCollapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
