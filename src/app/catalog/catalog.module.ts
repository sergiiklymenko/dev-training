import {NgModule} from '@angular/core';
import {CatalogComponent} from './catalog.component';
import {CatalogRoutingModule} from './catalog.routing.module';
import {ProductsService} from '../__/products/products.service';
import {CommonModule} from '@angular/common';
import {ItemService} from '../__/item/item.service';

@NgModule({
  declarations: [CatalogComponent],
  imports: [CommonModule, CatalogRoutingModule],
  providers: [ProductsService, ItemService],
  exports: [CatalogComponent]
})

export class CatalogModule {

}
