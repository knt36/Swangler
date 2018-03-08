import { TestBed, inject } from '@angular/core/testing';

import { EndpointsSharedService } from './endpoints-shared.service';

describe('EndpointsSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EndpointsSharedService]
    });
  });

  it('should be created', inject([EndpointsSharedService], (service: EndpointsSharedService) => {
    expect(service).toBeTruthy();
  }));

  it('isExamplesHidden variable should be initialized to false ', inject([EndpointsSharedService], (service: EndpointsSharedService) => {
    expect(service.isExamplesHidden).not.toBeTruthy();
  }));

  it('isExamplesHidden variable should be initialized to false ', inject([EndpointsSharedService], (service: EndpointsSharedService) => {
    service.endpointsExamplesToggle();
    expect(service.isExamplesHidden).toBeTruthy();
  }));

});
