import { TestBed } from '@angular/core/testing';

import { ExpertisesService } from './expertises.service';

describe('ExpertisesService', () => {
  let service: ExpertisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
