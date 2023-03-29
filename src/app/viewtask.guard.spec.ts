import { TestBed } from '@angular/core/testing';

import { ViewtaskGuard } from './viewtask.guard';

describe('ViewtaskGuard', () => {
  let guard: ViewtaskGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ViewtaskGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
