import {Component} from '@angular/core';
import {ProductsService} from '../__/products/products.service';
import {ItemService} from '../__/item/item.service';
import {ProductInterface} from '../__/products/products.interface';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html'
})

export class CatalogComponent {
  list: ProductInterface[] = this.productsService.productsArr;
  constructor(private productsService: ProductsService,
              private itemService: ItemService) {
  }

  saveItemToCart(data) {
    this.itemService.saveItems(data);
  }

}

