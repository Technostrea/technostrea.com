import { TestBed } from '@angular/core/testing';

import { AboutTeamService } from './about-team.service';

describe('AboutTeamService', () => {
  let service: AboutTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
