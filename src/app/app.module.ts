import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BbaComponent} from './shared/bba/bba.component';
import {PracticeComponent} from './shared/practice/practice.component';
import {InheritanceComponent} from './shared/inheritance/inheritance.component';
import {TimerComponent} from './shared/timer/timer.component';
import {VariablesComponent} from './shared/variables/variables.component';
import {WikiComponent} from './shared/wiki/wiki.component';
import {CalcComponent} from './shared/calc/calc.component';
import {LoginModule} from './login/login.module';
import {AppRoutingModule} from './app.routing.module';
import {NotFoundModule} from './not-found/not-found.module';
import {SignUpModule} from './sign-up/sign-up.module';
import {ForgotModule} from './forgot/forgot.module';
import {FeedbackModule} from './feedback/feedback.module';
import {AnchorModule} from './anchor/anchor.module';
import {MenuModule} from './menu/menu.module';
import {AccountModule} from './account/account.module';
import {FooterModule} from './footer/footer.module';
import {StorageService} from './__/storage/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    BbaComponent,
    PracticeComponent,
    InheritanceComponent,
    TimerComponent,
    VariablesComponent,
    WikiComponent,
    CalcComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AnchorModule,
    MenuModule,
    AccountModule,
    FooterModule,
    SignUpModule,
    ForgotModule,
    FeedbackModule,
    NotFoundModule,
    AppRoutingModule,
  ],
  exports: [AccountModule],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

