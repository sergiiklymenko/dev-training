import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './not-found.component';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {
        path: 'not-found',
        component: NotFoundComponent
      }
    ]
  )],
  exports: [RouterModule]
})

export class NotFoundRoutingModule {

}
