import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  imports: [
    RouterModule.forRoot([
        {
          path: '**',
          redirectTo: '/not-found',
          pathMatch: 'full'
        }
      ]
    )
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: './'
    }
  ]
})

export class AppRoutingModule {

}
