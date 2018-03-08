import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCollapsibleComponent } from './example-collapsible.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { SwaggerService } from '../../services/swagger.service';
import { ParamConsoleComponent } from '../param-console/param-console.component';
import { Schema } from '../../models/endpoint/endpoint.model';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

const SwaggerServiceStub: Partial<SwaggerService> = {
  getApiData: () => {
    return Observable.of(null);
  }
};

describe('ExampleCollapsibleComponent', () => {
  let component: ExampleCollapsibleComponent;
  let fixture: ComponentFixture<ExampleCollapsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleCollapsibleComponent, ParamConsoleComponent ],
      providers: [
        { provide: SwaggerService, useValue: SwaggerServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCollapsibleComponent);
    component = fixture.componentInstance;
    component.schema = Schema.MOCK_DATA;
    component.header = 'test';
    component.type = 'test';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init lazy sample generator', () => {
    spyOn(component.swaggerService, 'getApiData').and.returnValue(Observable.of(null));
    spyOn(component, 'setSampleFromSchema');

    component.initLazySampleGenrator();

    expect(component.swaggerService.getApiData).toHaveBeenCalled();
    expect(component.generatedSample).toEqual(null);

    component.collapsed = false;
    component.initLazySampleGenrator();
    expect(component.setSampleFromSchema).toHaveBeenCalled();
  });

  it('should toggle collapse', () => {
    spyOn(component, 'setSampleFromSchema');
    expect(component.collapsed).toBeTruthy();
    component.toggleCollapse();
    expect(component.collapsed).toBeFalsy();
    expect(component.setSampleFromSchema).toHaveBeenCalled();
  });

  it('should generate sample', () => {
    spyOn(component, 'generateSampleFromObject');
    component.generateSample(component.schema);
    expect(component.generateSampleFromObject).toHaveBeenCalledWith(component.schema);
  });

  it('should generate sample from object', () => {
    const res = component.generateSampleFromObject(component.schema);
    expect(typeof res).toEqual('string');
  });

  it('should generate sample from array', () => {
    const res = component.generateSampleFromArray(component.schema);
    expect(res).toEqual('[]');
  });

  it('should set sample from schema', () => {
    spyOn(component, 'generateSample').and.returnValue('{"test": "test"}');
    expect(component.generatedSample).toBeFalsy();
    component.setSampleFromSchema((component.schema));

    expect(component.generateSample).toHaveBeenCalled();
    expect(component.generatedSample.highlight.replace(/(\r\n\t|\n|\r\t|\s\s\s\s)/gm, ''))
      .toEqual('{<span class="hljs-attr">"test"</span>: <span class="hljs-string">"test"</span>}');

    expect(component.generatedSample.json.replace(/(\r\n\t|\n|\r\t)|\s\s\s\s/gm, ''))
      .toEqual('{"test": "test"}');
  });

  it('should toggle collapse', () => {
    expect(component.collapsed).toBeTruthy();
    const collapseElem = fixture.debugElement.query(By.css('.collapsable-nav-header')).nativeElement;
    collapseElem.click();
    expect(component.collapsed).toBeFalsy();
  });

  it('should emit value on click', () => {
    component.type = 'sample';
    component.generatedSample = {};
    component.generatedSample.json = 'test';
    fixture.detectChanges();
    const pre = fixture.debugElement.query(By.css('.sample-body')).nativeElement;

    component.clickedSample.subscribe( data => {
      expect(data).toEqual('test');
    });
    pre.click();
  });

  it('should render app-param-console', () => {
    component.type = 'schema';
    fixture.detectChanges();
    const paramConsole = fixture.debugElement.query(By.css('app-param-console ')).nativeElement;
    expect(paramConsole).toBeTruthy();
  });

  it('should not render app-param-console', () => {
    component.type = 'sample';
    fixture.detectChanges();
    const paramConsole = fixture.debugElement.query(By.css('app-param-console '));
    expect(paramConsole).toBeFalsy();
  });
});
