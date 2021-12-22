import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SignUpComponent} from './sign-up.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'sign-up', component: SignUpComponent}
    ])
  ],
  // why to export RouterModule here?
  exports: [RouterModule]
})

export class SignUpRoutingModule {

}
