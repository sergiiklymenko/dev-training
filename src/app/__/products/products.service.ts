import {Injectable} from '@angular/core';
import {ProductInterface} from './products.interface';

@Injectable()
export class ProductsService {

  productsArr: ProductInterface[] = [
    {
      id: '3190',
      title: 'bicycle',
      price: '500'
    },
    {
      id: '4572',
      title: 'ski',
      price: '300'
    },
    {
      id: '9983',
      title: 'snowboard',
      price: '200'
    }
  ];

}

