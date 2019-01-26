import { Moment } from 'moment';

export class ReadingDay {

    date: Moment;
    pages: string;

    constructor(date: Moment, pages: string){
        this.date = date;
        this.pages = pages;
    }
}
