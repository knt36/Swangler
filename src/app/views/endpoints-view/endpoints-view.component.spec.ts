import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { EndpointsViewComponent } from './endpoints-view.component';
import { Component, Input, Output, EventEmitter, Directive } from '@angular/core';
import { MockDirectiveResolver } from '@angular/compiler/testing';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { SwaggerService } from '../../services/swagger.service';
import { SecurityDefinition } from '../../models/auth/security-definition';
import { ApiData } from '../../models/apidata.model';
import { ModalDirective } from 'ngx-bootstrap';
import { By } from '@angular/platform-browser';
import { AppEndPoint } from '../../models/endpoint/endpoint.model';

const storage = {};
const LocalStorageServiceStub: Partial<LocalStorageService> = {
  getStorageVar: (varName) => {
    return storage ? storage[varName] : null;
  },
  securityDefinitions: (() => {
    return Observable.of('test');
  })(),
  setStorageVar: (varName, varVal) => {
    storage[varName] = varVal;
  }
};


const groupedEndpointsMock = [];
groupedEndpointsMock['test'] = [];
groupedEndpointsMock['test'].push(AppEndPoint.MOCK_DATA);

const SwaggerServiceStub: Partial<SwaggerService> = {
  getEndpointsSortedByTags: () => {
    return Observable.of(groupedEndpointsMock);
  },
  getApiData: () => {
    return Observable.of(ApiData.MOCK_DATA);
  },
  testEndpoint: () => {
    return Observable.of(null);
  }
};

const ActivatedRouteStub: Partial<ActivatedRoute> = {
  queryParams: (() => {
    return Observable.of({enpt: 'test'});
  })(),
  params: (() => {
    return Observable.of({endpointTag: 'test'});
  })()
};

@Directive({
  // tslint:disable-next-line
  selector: '[bsModal]',
  exportAs: 'bs-modal'
})
class MockBsModalDirective {}

@Component({
  template: '',
  selector: 'app-auth-component'
})
class MockAuthComponent {
  @Input() securityDefinitions;
}

@Component({
  template: '',
  selector: 'app-sidebar-nav'
})
class MockSidebarNavComponent {
  @Input() tags;
  @Input() sectionToExpand;
}

@Component({
  template: '',
  selector: 'app-contact'
})
class MockContactComponent {
  @Input() contactData;
}

@Component({
  template: '',
  selector: 'app-endpoint'
})
class MockEndpointComponent {
  @Input() endpointData;
  @Input() scrollToId;
  @Output() clickedTestEndPoint: EventEmitter<any> = new EventEmitter();
}

fdescribe('EndpointsViewComponent', () => {
  let component: EndpointsViewComponent;
  let fixture: ComponentFixture<EndpointsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EndpointsViewComponent,
        MockAuthComponent,
        MockSidebarNavComponent,
        MockContactComponent,
        MockEndpointComponent,
        MockBsModalDirective
      ],
      providers: [
        { provide: ActivatedRoute, useValue: ActivatedRouteStub },
        { provide: LocalStorageService, useValue: LocalStorageServiceStub },
        { provide: SwaggerService, useValue: SwaggerServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointsViewComponent);
    component = fixture.componentInstance;

    component.scrollToId = 'test';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('method updateEndpoints()', () => {
    it('should set enpoints with tag test', fakeAsync(() => {
      component.endpointTag = 'test';
      component.updateEndpoints();
      tick();
      expect(component.endpoints.length).toBeGreaterThan(0);
    }));

    it('should call swaggerService.getEndpointsSortedByTags', fakeAsync(() => {
      spyOn(component.swaggerService, 'getEndpointsSortedByTags').and.returnValue(Observable.of(true));
      component.updateEndpoints();
      tick();
      expect(component.swaggerService.getEndpointsSortedByTags).toHaveBeenCalled();
    }));

    it('should not set any endpoints as there is no tag "foo" in mock', fakeAsync(() => {
      component.endpointTag = 'foo';
      component.updateEndpoints();
      tick();
      expect(component.endpoints).toBeFalsy();
    }));

    it('should set first available endpoint if no tag provided', fakeAsync(() => {
      component.endpointTag = null;
      component.updateEndpoints();
      tick();
      expect(component.endpoints.length).toEqual(1);
    }));
  });

  describe('method clickTest()', () => {

    it('should call swaggerService.testEndpoint', () => {
      spyOn(component.swaggerService, 'testEndpoint').and.returnValue(Observable.of('f'));
      spyOn(component, 'setRes').and.returnValue(true);
      component.clickTest('test', 'test');
      expect(component.swaggerService.testEndpoint).toHaveBeenCalled();
    });

  });




  // it('should MODALLLL', () => {
  //   const modal = fixture.debugElement.query(By.css('[bsModal]')).nativeElement;
  //   expect(component).toBeTruthy();
  // });
});
