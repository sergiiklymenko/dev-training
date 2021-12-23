import {NgModule} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {CheckoutComponent} from './checkout.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'checkout', component: CheckoutComponent}
    ])
  ],
  exports: [RouterModule]
})

export class CheckoutRoutingModule {

}
