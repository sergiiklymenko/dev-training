import {Component, Input, OnInit} from '@angular/core';
import {ProductInterface} from '../__/products/products.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})

export class CheckoutComponent implements OnInit{
  @Input() checkoutArr: ProductInterface[] = [];

  constructor() {
  }

  ngOnInit() {
  }


}
