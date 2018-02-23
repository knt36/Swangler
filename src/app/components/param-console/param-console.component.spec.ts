import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamConsoleComponent } from './param-console.component';

describe('ParamConsoleComponent', () => {
  let component: ParamConsoleComponent;
  let fixture: ComponentFixture<ParamConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
