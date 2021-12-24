import {Component, Input, OnInit} from '@angular/core';
import {ProductInterface} from '../__/products/products.interface';
import {ItemService} from '../__/item/item.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})

export class CheckoutComponent implements OnInit {
  checkoutArr: ProductInterface[] = [];
  data: ProductInterface;
  id = 0;

  constructor(private itemsService: ItemService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.checkoutArr = this.itemsService.getItems();
    this.route.params.subscribe((params: Params) => {
      console.log('This is params:');
      console.log(params);
      this.id = params.id;
      this.getSpecificItem();
    });
  }

  getSpecificItem() {
    this.data = this.checkoutArr[this.id];
  }


}
