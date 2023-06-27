import { TestBed } from '@angular/core/testing';

import { HallApiService } from './hall-api.service';

describe('HallApiService', () => {
  let service: HallApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HallApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
