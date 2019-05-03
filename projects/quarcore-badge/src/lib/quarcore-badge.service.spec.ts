import { TestBed } from '@angular/core/testing';

import { QuarcoreBadgeService } from './quarcore-badge.service';

describe('QuarcoreBadgeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuarcoreBadgeService = TestBed.get(QuarcoreBadgeService);
    expect(service).toBeTruthy();
  });
});
