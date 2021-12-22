import {NgModule} from '@angular/core';
import {AccountComponent} from './account.component';
import {AccountRoutingModule} from './account.routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [AccountComponent],
  imports: [AccountRoutingModule, CommonModule],
  exports: [AccountComponent]
})

export class AccountModule {

}
