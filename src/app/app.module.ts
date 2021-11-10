import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BbaComponent } from './bba/bba.component';
import { PracticeComponent } from './practice/practice.component';
import { InheritanceComponent } from './inheritance/inheritance.component';
import {TimerComponent} from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    BbaComponent,
    PracticeComponent,
    InheritanceComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
