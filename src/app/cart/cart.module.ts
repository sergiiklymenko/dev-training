import {NgModule} from '@angular/core';
import {CartComponent} from './cart.component';
import {CartRoutingModule} from './cart.routing.module';
import {ItemService} from '../__/item/item.service';
import {CommonModule} from '@angular/common';
import {CheckoutModule} from '../checkout/checkout.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, CheckoutModule],
  providers: [ItemService],
  exports: [CartComponent]
})

export class CartModule {

}
