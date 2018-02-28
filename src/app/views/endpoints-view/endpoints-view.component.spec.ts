import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointsViewComponent } from './endpoints-view.component';

describe('EndpointsViewComponent', () => {
  let component: EndpointsViewComponent;
  let fixture: ComponentFixture<EndpointsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndpointsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
