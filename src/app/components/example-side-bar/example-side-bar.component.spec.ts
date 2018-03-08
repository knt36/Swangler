import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { ExampleSideBarComponent } from './example-side-bar.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppEndPoint } from '../../models/endpoint/endpoint.model';
import { By } from '@angular/platform-browser';

@Component({
  template: '',
  selector: 'app-example-collapsible'
})
class MockExampleCollapsibleComponent {
  @Input() header;
  @Input() type;
  @Input() schema;
  @Output() clickedSample: EventEmitter<any> = new EventEmitter();
}

describe('ExampleSideBarComponent', () => {
  let component: ExampleSideBarComponent;
  let fixture: ComponentFixture<ExampleSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExampleSideBarComponent,
        MockExampleCollapsibleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSideBarComponent);
    component = fixture.componentInstance;
    component.endpoint = AppEndPoint.MOCK_DATA;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init component', () => {
    expect(component.bodySchema).toBeFalsy();
    expect(component.responseSchema).toBeFalsy();

    component.ngOnInit();

    expect(typeof component.bodySchema).toEqual('object');
    expect(typeof component.responseSchema).toEqual('object');

    component.bodySchema = null;
    component.responseSchema = null;

    component.endpoint.responses['200'].schema = null;
    component.ngOnInit();
    expect(component.responseSchema).toBeFalsy();

    component.endpoint.responses['200'] = null;
    component.ngOnInit();
    expect(component.responseSchema).toBeFalsy();

    component.endpoint.responses = null;
    component.ngOnInit();
    expect(component.responseSchema).toBeFalsy();
  });

  it('should emit event', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const bodySample = fixture.debugElement.query(By.css('.request-body-sample')).nativeElement;
    component.clickedBodySample.subscribe( data => {
      expect(data).toBeTruthy();
    });
    bodySample.dispatchEvent(new Event('clickedSample'));
  });

  it('should render h5', () => {
    fixture.detectChanges();
    component.responseSchema = null;
    component.bodySchema = null;
    fixture.detectChanges();
    const h5 = fixture.debugElement.query(By.css('h5'));
    expect(h5).toBeTruthy();
  });
});
