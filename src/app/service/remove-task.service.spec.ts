import { TestBed } from '@angular/core/testing';

import { RemoveTaskService } from './remove-task.service';

describe('RemoveTaskService', () => {
  let service: RemoveTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
