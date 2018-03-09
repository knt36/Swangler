import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Component, Input} from '@angular/core';
import {NotificationsService} from 'angular2-notifications';
import {SwaggerService} from './services/swagger.service';
fdescribe('AppComponent', () => {
  const MockSwaggerService = {
    'getEndpointsSortedByTags': function() {
      return (null);
    }
  };
  @Component({
    selector: 'router-outlet',
    template: '<span></span>'
  })
  class AppDummyComponent {
  }

  @Component({
    selector: 'simple-notifications',
    template: '<span></span>'
  })
  class AppNotificationDummyComponent {
    @Input('options') options;
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppDummyComponent,
        AppNotificationDummyComponent
      ],
      providers: [
        { provide: SwaggerService, useValue: MockSwaggerService },
        NotificationsService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
