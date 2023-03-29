import { TestBed } from '@angular/core/testing';

import { ModifyTaskService } from './modify-task.service';

describe('ModifyTaskService', () => {
  let service: ModifyTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
