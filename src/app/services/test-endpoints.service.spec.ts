import { TestBed, inject } from '@angular/core/testing';

import { TestEndpointsService } from './test-endpoints.service';

describe('TestEndpointsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestEndpointsService]
    });
  });

  it('should be created', inject([TestEndpointsService], (service: TestEndpointsService) => {
    expect(service).toBeTruthy();
  }));
});
