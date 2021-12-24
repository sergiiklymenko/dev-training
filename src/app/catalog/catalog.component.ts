import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../__/products/products.service';
import {ItemService} from '../__/item/item.service';
import {ProductInterface} from '../__/products/products.interface';

// export class ProductInterface {
//   id: string;
//   title: string;
//   price: string;
// }

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html'
})

export class CatalogComponent {
  // productsArr: ProductInterface[] = [
  //   {
  //     id: '3190',
  //     title: 'bicycle',
  //     price: '500'
  //   },
  //   {
  //     id: '4572',
  //     title: 'ski',
  //     price: '300'
  //   },
  //   {
  //     id: '9983',
  //     title: 'snowboard',
  //     price: '200'
  //   }
  // ];
  list: ProductInterface[] = [];
  constructor(private productsService: ProductsService,
              private itemService: ItemService) {

  }

  ngOnInit() {
    this.list = this.productsService.getProducts();
  }

  saveItemToCart(index, data) {
    this.itemService.saveItems(index, data);
  }

}

