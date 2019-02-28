import { TestBed } from '@angular/core/testing';

import { ExserviceService } from './exservice.service';

describe('ExserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExserviceService = TestBed.get(ExserviceService);
    expect(service).toBeTruthy();
  });
});
