import { TestBed } from '@angular/core/testing';

import { HairtService } from './hairt.service';

describe('HairtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HairtService = TestBed.get(HairtService);
    expect(service).toBeTruthy();
  });
});
