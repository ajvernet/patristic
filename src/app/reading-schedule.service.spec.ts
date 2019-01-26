import { TestBed } from '@angular/core/testing';

import { ReadingScheduleService } from './reading-schedule.service';

describe('ReadingScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadingScheduleService = TestBed.get(ReadingScheduleService);
    expect(service).toBeTruthy();
  });
});
