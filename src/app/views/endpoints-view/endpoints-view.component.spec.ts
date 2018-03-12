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
import { AppEndPoint, RequestInitiator } from '../../models/endpoint/endpoint.model';
import { HttpHeaders } from '@angular/common/http';
import { NotificationsService } from 'angular2-notifications';

const modalMock = {
  show: () => {
    return true;
  }
};

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
  },
  initSwagger: () => {
    return Promise.resolve(true);
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

describe('EndpointsViewComponent', () => {
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
        NotificationsService,
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

  it('should call clickTest on clickedTestEndPoint', () => {
    spyOn(component, 'clickTest').and.returnValue(true);
    component.ngOnInit();
    fixture.detectChanges();
    const appEndpoint = fixture.debugElement.query(By.css('app-endpoint')).nativeElement;
    appEndpoint.dispatchEvent(new Event('clickedTestEndPoint'));
    expect(component.clickTest).toHaveBeenCalled();
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

    it('should not set any endpoints if unknown tag is passed', fakeAsync(() => {
      component.endpoints = null;
      component.endpointTag = 'foo';
      component.updateEndpoints();
      tick();
      expect(component.endpoints).toBeFalsy();
    }));

    it('should show error message if unknown tag is passed', fakeAsync(() => {
      spyOn(component.notify, 'error');
      component.endpoints = null;
      component.endpointTag = 'foo';
      component.updateEndpoints();
      tick();
      fixture.detectChanges();
      const error_header = fixture.debugElement.query(By.css('.no-endpoint-data')).nativeElement;
      expect(component.wrongTag).toBeTruthy();
      expect(error_header).toBeTruthy();
      expect(component.notify.error).toHaveBeenCalled();
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
      spyOn(component.swaggerService, 'testEndpoint').and.returnValue(Observable.of(true));
      spyOn(component, 'setRes').and.returnValue(true);
      component.clickTest(RequestInitiator.MOCK_DATA, modalMock);
      expect(component.swaggerService.testEndpoint).toHaveBeenCalled();
    });

    it('should call swaggerService.testEndpoint and return error', () => {
      spyOn(component.swaggerService, 'testEndpoint').and.returnValue(Observable.create(e => e.error({error: 'failed'})));
      spyOn(component, 'setRes').and.returnValue(true);
      component.clickTest(RequestInitiator.MOCK_DATA, modalMock);
      expect(component.swaggerService.testEndpoint).toHaveBeenCalled();
      expect(component.result['responseBody']).toEqual('<span class="hljs-string">"failed"</span>');
    });

    it('should call setRes with given params', () => {
      spyOn(component.swaggerService, 'testEndpoint').and.returnValue(Observable.of(true));
      spyOn(component, 'setRes').and.returnValue(true);
      component.clickTest(RequestInitiator.MOCK_DATA, modalMock);
      expect(component.setRes).toHaveBeenCalledWith(true, RequestInitiator.MOCK_DATA);
    });
  });


  describe('method setRes()', () => {
    it('should populate result object with default values', () => {
      component.setRes({}, RequestInitiator.MOCK_DATA);

      expect(component.result['url']).toEqual('No URL Present');
      expect(component.result['responseCode']).toEqual('No code Present');
      expect(component.result['responseHeader']).toEqual('No Headers Present');
      expect(component.result['responseBody']).toEqual('{}');
    });

    it('should create response headers string from object', () => {
      component.setRes({headers: {test: 'test'}}, RequestInitiator.MOCK_DATA);

      expect(component.result['responseHeader'].replace(/(\r\n\t|\n|\r\t|\s\s\s\s)/gm, ''))
        .toEqual('{<span class="hljs-attr">"test"</span>: <span class="hljs-string">"test"</span>}');
    });

    it('should create response headers', () => {
      let headers = new HttpHeaders();
      headers = headers.set('content-type', 'application/json');
      component.setRes({ headers: headers }, RequestInitiator.MOCK_DATA);

      expect(component.result['responseHeader'].replace(/(\r\n\t|\n|\r\t|\s\s\s\s)/gm, ''))
        .toEqual('[<span class="hljs-string">"content-type: application/json"</span>]');
    });
  });


  describe('modal window', () => {
    it('should show default values', () => {
      component.setRes({}, RequestInitiator.MOCK_DATA);
      fixture.detectChanges();

      const responselUrl = fixture.debugElement.query(By.css('[bsModal] .request_url > div')).nativeElement;
      expect(responselUrl.innerText).toEqual('No URL Present');

      const responseBody = fixture.debugElement.query(By.css('[bsModal] .response_body code')).nativeElement;
      expect(responseBody.innerText).toEqual('{}');

      const responseHeaders = fixture.debugElement.query(By.css('[bsModal] .response_headers code')).nativeElement;
      expect(responseHeaders.innerText).toEqual('No Headers Present');
    });

    it('should show change values', () => {
      component.setRes({}, RequestInitiator.MOCK_DATA);
      fixture.detectChanges();
      const responseHeaders = fixture.debugElement.query(By.css('[bsModal] .response_headers code')).nativeElement;

      expect(responseHeaders.innerText).toEqual('No Headers Present');

      let headers = new HttpHeaders();
      headers = headers.set('content-type', 'application/json');
      component.setRes({ headers: headers }, RequestInitiator.MOCK_DATA);
      fixture.detectChanges();

      expect(responseHeaders.innerText.replace(/(\r\n\t|\n|\r\t|\s\s\s\s)/gm, ''))
        .toEqual('["content-type: application/json"]');
    });
  });
});
