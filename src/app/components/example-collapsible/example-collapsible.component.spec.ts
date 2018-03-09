import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCollapsibleComponent } from './example-collapsible.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { SwaggerService } from '../../services/swagger.service';
import { ParamConsoleComponent } from '../param-console/param-console.component';
import {RequestSchema, ResponseSchema} from '../../models/endpoint/endpoint.model';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

const SwaggerServiceStub: Partial<SwaggerService> = {
  getApiData: () => {
    return Observable.of(null);
  }
};

fdescribe('ExampleCollapsibleComponent', () => {
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
    component.schema = ResponseSchema.MOCK_DATA as ResponseSchema;
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
    const sample = component.generateSample(component.schema);
    try {
      JSON.parse(sample);
      expect(true).toBeTruthy();
    } catch (e) {
      fail(e);
    }
  });

  it('should generate sample from object', () => {
    const res = component.generateSampleFromObject(component.schema);
    expect(res).toEqual('{ \n' +
      '"sampleItems" : ["string"],"items" : [\n' +
      '{ \n' +
      '"created_at": "2018-01-04T20:13:55.373557+0000","created_by": "system","updated_at": "2018-01-04T20:13:55.37355' +
      '7+0000","updated_by": "system","id": "test_inc","name": "Test, Inc.","is_active": "undefined"}],"page_number": ' +
      '"1","page_size": "20","total_pages": "1","total_items": "1"}');
  });

  it('should generate sample from object with examples even if no property field exist for examples', () => {
    const res = component.generateSampleFromObject(RequestSchema.MOCK_DATA);
    expect(res).toEqual('{ \n' +
      '"name": "DemoAPIKey","acl" : { \n' +
      '"create-space": "false","get-space-by-id": "true"}}');
  });

  it('should generate sample from array', () => {
    const responseSchema: ResponseSchema = component.schema as ResponseSchema;
    const res = component.generateSampleFromArray(responseSchema.properties.items);
    expect(res).toEqual('[\n' +
      '{ \n' +
      '"created_at": "2018-01-04T20:13:55.373557+0000","created_by": "system","updated_at":' +
      ' "2018-01-04T20:13:55.373557+0000","updated_by": "system","id": "test_inc","name":' +
      ' "Test, Inc.","is_active": "undefined"}]');
  });

  it('should generate sample from array if no sample for that array is provided instead provide datatype', () => {
    const responseSchema: ResponseSchema = component.schema as ResponseSchema;
    const res = component.generateSampleFromArray(responseSchema.properties.sampleItems);
    expect(res).toEqual('["string"]');
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
