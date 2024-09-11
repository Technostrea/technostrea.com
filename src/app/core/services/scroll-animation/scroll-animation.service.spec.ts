import { TestBed } from '@angular/core/testing';

import { ScrollAnimationService } from './scroll-animation.service';

describe('ScrollAnimationService', () => {
  let service: ScrollAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
