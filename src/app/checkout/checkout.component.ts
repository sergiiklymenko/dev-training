import {Component, Input, OnInit} from '@angular/core';
import {ProductInterface} from '../__/products/products.interface';
import {ItemService} from '../__/item/item.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})

export class CheckoutComponent implements OnInit{
  @Input() checkoutArr: ProductInterface[] = [];

  constructor(private itemsService: ItemService ) {
  }

  ngOnInit() {
    this.checkoutArr = this.itemsService.getItems();
  }


}
