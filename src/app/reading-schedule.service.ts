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

    let readingIncrement = 1;
    
    while(currentPage < numPages){
      
      let readingDay = new ReadingDay(moment(currentDate), currentPage + ' - ' + (currentPage + readingIncrement));
    
      // if(currentDate.day() != 0){}
      currentDate.add(1, 'days');

      if(currentDate.weekday() != 1){
        readingsList.push(readingDay);

        currentPage += (1 + readingIncrement);
        }
        
        if(currentPage >= 38) {
          readingIncrement = 3
        }
      }

      return readingsList;
    }
    


  

  }
