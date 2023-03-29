import { TestBed } from '@angular/core/testing';

import { ArchiveTaskService } from './archive-task.service';

describe('ArchiveTaskService', () => {
  let service: ArchiveTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchiveTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
