import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CheckoutComponent} from './checkout.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'checkout/:id', component: CheckoutComponent},
    ])
  ],
  exports: [RouterModule]
})

export class CheckoutRoutingModule {

}
