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
});
