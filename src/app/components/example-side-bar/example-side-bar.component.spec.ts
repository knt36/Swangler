import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSideBarComponent } from './example-side-bar.component';

describe('ExampleSideBarComponent', () => {
  let component: ExampleSideBarComponent;
  let fixture: ComponentFixture<ExampleSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
