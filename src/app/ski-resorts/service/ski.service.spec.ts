import { TestBed } from '@angular/core/testing';

import { SkiService } from './ski.service';

describe('SkiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkiService = TestBed.get(SkiService);
    expect(service).toBeTruthy();
  });
});
