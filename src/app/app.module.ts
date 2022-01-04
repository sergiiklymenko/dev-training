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
import {CatalogModule} from './catalog/catalog.module';
import {CommonModule} from '@angular/common';
import {CartModule} from './cart/cart.module';
import {CheckoutModule} from './checkout/checkout.module';
import {HttpClientService} from './__/httpClient/http-client.service';
import {HttpClientModule} from '@angular/common/http';
import {UsersModule} from './users/users.module';
import {ProfileModule} from './profile/profile.module';
import {TestErrorComponent} from './test-error/test-error.component';
import {HighlightDirective} from './__/directive/highlight.directive';
import {CoreModule} from './__/core.module';

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
    TestErrorComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    HttpClientModule,
    UsersModule,
    ProfileModule,
    BrowserModule,
    LoginModule,
    CatalogModule,
    AnchorModule,
    CartModule,
    CheckoutModule,
    MenuModule,
    AccountModule,
    FooterModule,
    SignUpModule,
    ForgotModule,
    FeedbackModule,
    NotFoundModule,
    AppRoutingModule
  ],
  exports: [AccountModule],
  providers: [
    StorageService,
    HttpClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

