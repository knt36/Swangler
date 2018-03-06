import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SidebarNavComponent } from './sidebar-nav.component';
import { CollapsableNavComponent } from '../collapsable-nav/collapsable-nav.component';
import { SimpleChange } from '@angular/core';
import { SidebarNavModel } from '../../models/sidebar/sidebar-nav.model';


fdescribe('SidebarNavComponent', () => {
  let component: SidebarNavComponent;
  let fixture: ComponentFixture<SidebarNavComponent>;

  const tags: SidebarNavModel = {
    'test': {
      'operationId': 'test',
      'summary': 'test',
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarNavComponent, CollapsableNavComponent ],
      imports: [ RouterTestingModule ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate arrayOfTags on tags input change', () => {
    component.ngOnChanges({
      tags: new SimpleChange(null, tags, null)
    });

    expect(component.arrayOfTags).toEqual(
      [
        {
          'tagName': 'test',
          'tagValue': {
            'operationId': 'test',
            'summary': 'test'
          }
        }
      ]
    );
  });

});
