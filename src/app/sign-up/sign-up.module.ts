import {NgModule} from '@angular/core';
import {SignUpComponent} from './sign-up.component';
import {SignUpRoutingModule} from './sign-up.routing.module';
import {SignUpService} from './sign-up.service';
import {ForgotModule} from '../forgot/forgot.module';
import {ForgotComponent} from '../forgot/forgot.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [SignUpComponent],
  imports: [SignUpRoutingModule, ForgotModule, FormsModule],
  providers: [],
  exports: [SignUpComponent]
})

export class SignUpModule {

}
