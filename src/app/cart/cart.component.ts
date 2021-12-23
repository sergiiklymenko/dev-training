import {Component, OnInit} from '@angular/core';
import {ItemService} from '../__/item/item.service';
import {ProductInterface} from '../__/products/products.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit{

  cartArr: ProductInterface[] = [];
  constructor(private itemService: ItemService,
              private router: Router) {

  }

  ngOnInit() {
    this.cartArr = this.itemService.getItems();
    console.log('This is checkoutArr:');
    console.table(this.cartArr);
  }

  toCheckout() {
    this.router.navigate(['checkout']);
  }

}
