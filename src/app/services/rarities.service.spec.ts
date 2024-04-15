import { TestBed } from '@angular/core/testing';

import { RaritiesService } from './rarities.service';

describe('RaritiesService', () => {
  let service: RaritiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaritiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
