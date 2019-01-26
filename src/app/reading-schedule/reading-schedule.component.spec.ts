import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingScheduleComponent } from './reading-schedule.component';

describe('ReadingScheduleComponent', () => {
  let component: ReadingScheduleComponent;
  let fixture: ComponentFixture<ReadingScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
