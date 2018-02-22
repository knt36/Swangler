import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsableNavComponent } from './collapsable-nav.component';

describe('CollapsableNavComponent', () => {
  let component: CollapsableNavComponent;
  let fixture: ComponentFixture<CollapsableNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsableNavComponent ]
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
});
