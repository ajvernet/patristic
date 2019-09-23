import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadingScheduleComponent } from './reading-schedule/reading-schedule.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BannerComponent } from './banner/banner.component';
import { BookInfoComponent } from './book-info/book-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadingScheduleComponent,
    NavbarComponent,
    WelcomeComponent,
    BannerComponent,
    BookInfoComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
