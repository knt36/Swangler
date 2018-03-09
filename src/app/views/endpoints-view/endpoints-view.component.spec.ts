import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointsViewComponent } from './endpoints-view.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MockDirectiveResolver } from '@angular/compiler/testing';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { SwaggerService } from '../../services/swagger.service';
import { SecurityDefinition } from '../../models/auth/security-definition';
import { ApiData } from '../../models/apidata.model';
import { ModalDirective } from 'ngx-bootstrap';

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

const SwaggerServiceStub: Partial<SwaggerService> = {
  getEndpointsSortedByTags: () => {
    return Observable.of('test');
  },
  getApiData: () => {
    return Observable.of(ApiData.MOCK_DATA);
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
        MockEndpointComponent
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

    component.endpointTag = 'test';
    component.scrollToId = 'test';
    component.apiData = 'test';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
