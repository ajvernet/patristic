import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ReadingScheduleService } from '../reading-schedule.service';
import { ReadingDay } from '../reading-day';


@Component({
  selector: 'app-reading-schedule',
  templateUrl: './reading-schedule.component.html',
  styleUrls: ['./reading-schedule.component.scss']
})
export class ReadingScheduleComponent implements OnInit {

  currentDate: moment.Moment;
  currentReading: string;
  showAllReadings:boolean = false;

  START_PAGE = 13;
  END_PAGE = 327;

  readings: ReadingDay[];


  constructor(private service: ReadingScheduleService) { }

  ngOnInit() {

    this.currentDate = moment('2019-01-21');
    this.readings = this.service.getDailyReadings(this.currentDate, this.START_PAGE, this.END_PAGE);
    this.readings.forEach(readingDay => {
      if(readingDay.date.isSame(moment(), 'day')){
        console.log(readingDay)
        this.currentReading = readingDay.pages;
      }
      
    });
  }

  toggleShowAll(){
    this.showAllReadings = !this.showAllReadings;
  }

  

}
