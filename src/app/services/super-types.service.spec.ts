import { TestBed } from '@angular/core/testing';

import { SuperTypesService } from './super-types.service';

describe('SuperTypesService', () => {
  let service: SuperTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
