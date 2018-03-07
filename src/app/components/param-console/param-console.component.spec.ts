import {ComponentFixture, TestBed } from '@angular/core/testing';
import { ParamConsoleComponent } from './param-console.component';
import {RequestSchema, ResponseSchema} from '../../models/endpoint/endpoint.model';
import {By} from '@angular/platform-browser';
function test(schema, typeMsg: string) {
  const requestSchema: ResponseSchema | RequestSchema = schema;
  fdescribe('ParamConsoleComponent with Input ' + typeMsg, () => {
    let component: ParamConsoleComponent;
    let fixture: ComponentFixture<ParamConsoleComponent>;
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ ParamConsoleComponent ]
      });
      fixture = TestBed.createComponent(ParamConsoleComponent);
      component = fixture.componentInstance;
      component.schema = requestSchema;
      fixture.detectChanges();
    });
    it('should create', () => {
      expect(component).toBeDefined();
    });
    it('propName should be displayed as key of properties', () => {
      const properties = component.schema.properties;
      Object.keys(properties).forEach(propertyName => {
        expect(fixture.debugElement.query(By.css('#' + propertyName + ' .propName'))
          .nativeElement.textContent.trim()).toEqual(propertyName);
      });
    });
    it('propType should be displayed as type of entry from properties', () => {
      const properties = component.schema.properties;
      Object.keys(properties).forEach(propertyName => {
        expect(fixture.debugElement.query(By.css('#' + propertyName + ' .propType'))
          .nativeElement.textContent.trim()).toEqual(properties[propertyName].type);
      });
    });
    it('propOptKey should be displayed as required of entry from properties', () => {
      const properties = component.schema.properties;
      Object.keys(properties).forEach(propertyName => {
        expect(fixture.debugElement.query(By.css('#' + propertyName + ' .propOptKey'))
          .nativeElement.textContent.trim()).toEqual(component.getFieldRequirementText(properties[propertyName].required));
      });
    });
    it('propDesc should be displayed as description of entry from properties', () => {
      const properties = component.schema.properties;
      Object.keys(properties).forEach(propertyName => {
        expect(fixture.debugElement.query(By.css('#' + propertyName + ' .propDesc'))
          .nativeElement.textContent.trim())
          .toEqual(properties[propertyName].description ? properties[propertyName].description : 'No description');
      });
    });
    it('propDesc should be displayed as "No Description" of entry from properties with null for description', () => {
      const properties = component.schema.properties;
      Object.keys(properties).forEach(propertyName => {
        properties[propertyName].description = undefined;
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('#' + propertyName + ' .propDesc'))
          .nativeElement.textContent.trim()).toEqual('No description');
      });
    });
    it('should be Capitalized "No Title" on empty title of requestSchema', () => {
      expect(fixture.debugElement.query(By.css('.objectNameText')).nativeElement.textContent).toEqual('NO TITLE');
    });
    it('should be Capitalized "No Title" on empty title of responseSchema', () => {
      expect(fixture.debugElement.query(By.css('.objectNameText')).nativeElement.textContent).toEqual('NO TITLE');
    });
    it('should be input title substituted for title', () => {
      const title = 'PARENT';
      component.title = title;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.objectNameText')).nativeElement.textContent).toEqual(title);
    });
    it('should not throw exception on null schema.properties', (done) => {
      component.schema.properties = undefined;
      try {
        fixture.detectChanges();
        done();
      } catch (error) {
        fail(error);
      }
    });
    it('should not show .schema-property on @input schema.properties = null', () => {
      component.schema.properties = undefined;
      expect(fixture.debugElement.query(By.css('.schema-property'))).not.toBeTruthy();
    });
    it('should return "(optional)" on false', () => {
      expect(component.getFieldRequirementText(false)).toEqual(component.OPTIONAL);
    });
    it('should return "(optional)" on null', () => {
      expect(component.getFieldRequirementText(undefined)).toEqual(component.OPTIONAL);
    });
    it('should return "(required)" on true', () => {
      expect(component.getFieldRequirementText(true)).toEqual(component.REQUIRED);
    });
    it('component.REQUIRED should be (required)', () => {
      expect(component.REQUIRED).toEqual('(required)');
    });
    it('component.OPTIONAL should be (optional)', () => {
      expect(component.OPTIONAL).toEqual('(optional)');
    });
  });
}
fdescribe('ParamConsoleComponent', () => {
  test(RequestSchema.MOCK_DATA, 'RequestSchema');
  test(ResponseSchema.MOCK_DATA, 'ResponseSchema');
});

