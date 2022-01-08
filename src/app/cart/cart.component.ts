import {Component, OnInit} from '@angular/core';
import {ItemService} from '../__/item/item.service';
import {ProductInterface} from '../__/products/products.interface';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit {

  cartArr: ProductInterface[] = this.itemService.getItems();
  ccNumber = '';
  phoneNumber = '';
  creditcardutils = require('creditcardutils');

  constructor(private itemService: ItemService,
              private router: Router) {

  }

  ngOnInit() {
  }

  toCheckout(index) {
    this.router.navigate(['checkout']);
  }

  validateCard() {
    return this.creditcardutils.parseCardNumber(this.ccNumber);
  }

}
