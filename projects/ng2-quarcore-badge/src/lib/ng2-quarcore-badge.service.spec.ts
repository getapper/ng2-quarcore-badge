import { TestBed } from '@angular/core/testing';

import { Ng2QuarcoreBadgeService } from './ng2-quarcore-badge.service';

describe('Ng2QuarcoreBadgeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng2QuarcoreBadgeService = TestBed.get(Ng2QuarcoreBadgeService);
    expect(service).toBeTruthy();
  });
});
