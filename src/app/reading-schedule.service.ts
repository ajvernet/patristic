import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { ReadingDay } from './reading-day';

@Injectable({
  providedIn: 'root'
})
export class ReadingScheduleService {

  constructor() {}


  getDailyReadings(startDate: moment.Moment, startPage: number, numPages: number): Array<any>{
    let currentPage = startPage;

    let currentDate = startDate;

    let readingsList = new Array<ReadingDay>();
    
    while(currentPage < numPages){

      
      let readingDay = new ReadingDay(moment(currentDate), currentPage + ' - ' + (currentPage + 1));
    
      // if(currentDate.day() != 0){}
      currentDate.add(1, 'days');

      if(currentDate.weekday() != 1){
        readingsList.push(readingDay);

        if(currentPage < 89){
        currentPage += 2;
        } else {
          currentPage +=4
        }
      }
    }
    

    return readingsList;
  }

  }
