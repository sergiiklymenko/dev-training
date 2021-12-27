import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductInterface} from '../__/products/products.interface';
import {ItemService} from '../__/item/item.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import {HttpClientService} from '../__/httpClient/http-client.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})

export class CheckoutComponent implements OnInit, OnDestroy {
  checkoutArr: ProductInterface[] = [];
  data: ProductInterface;
  subscription: Subscription = new Subscription();
  id = 0;

  constructor(private itemsService: ItemService,
              private route: ActivatedRoute,
              private httpClient: HttpClientService) {
  }

  ngOnInit() {
    this.checkoutArr = this.itemsService.getItems();
    this.subscription.add(this.route.params.subscribe((params: Params) => {
      console.log('This is params:');
      console.log(params);
      this.id = params.id;
      this.getSpecificItem();
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getSpecificItem() {
    this.data = this.checkoutArr[this.id];
  }


}
