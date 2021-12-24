import {Injectable} from '@angular/core';
import {StorageService} from '../storage/storage.service';
import {ProductInterface} from '../products/products.interface';


@Injectable()
export class ItemService implements ProductInterface {
  id = '';
  price = '';
  title = '';
  itemArray: ProductInterface[] = [];

  readonly itemKey = 'itemKey';

  constructor(private storageService: StorageService) {
    this.itemArray = this.storageService.getData(this.itemKey) || this.itemArray;
    console.log('This is itemArray:');
    console.table(this.itemArray);
  }

  saveItems(data: any) {
    if (data) {
      console.log('This is index:');
      console.log(data);
      this.itemArray.push(data);
      this.storageService.setData(this.itemKey, this.itemArray);
    } else {
      console.log('Item is not added to the cart');
    }
  }

  getItems() {
    return this.storageService.getData(this.itemKey) || [];
  }

}

