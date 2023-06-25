import { TestBed } from '@angular/core/testing';

import { AccomodationApiService } from './accomodation-api.service';

describe('AccomodationApiService', () => {
  let service: AccomodationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccomodationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
