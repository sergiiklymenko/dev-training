import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login.routing.module';
import {AccountModule} from '../account/account.module';
import {ForgotModule} from '../forgot/forgot.module';
import {FormsModule} from '@angular/forms';
import {UserService} from '../__/user/user.service';

//1 Component, 2 Module, 3 Service, 4 Pipe, 5 Directive, 6 Decorators
@NgModule({
  //here we can only declare components, pipes, directives
  declarations: [
    LoginComponent
  ],
  //Imports we can only import modules
  imports: [LoginRoutingModule, FormsModule, AccountModule],

  bootstrap: [],
  // Providers are only for Services
  providers: [UserService],
  //In exports: if this module is used in another module to have, have to export components to be available in other components when module is used
  exports: [LoginComponent],
})

export class LoginModule {

}






