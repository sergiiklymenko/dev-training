import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CatalogComponent} from './catalog.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'catalog', component: CatalogComponent
      }
      ]
    )
  ],
  exports: [RouterModule]
})

export class CatalogRoutingModule {

}
