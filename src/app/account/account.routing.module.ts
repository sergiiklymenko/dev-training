import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AccountComponent} from './account.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'account', component: AccountComponent}
    ])
  ],
  exports: [RouterModule]
})


export class AccountRoutingModule {

}
