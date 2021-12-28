import {NgModule} from '@angular/core';
import {UsersComponent} from './users.component';
import {UsersRoutingModule} from './users.routing.module';
import {CommonModule} from '@angular/common';
import {ProfileService} from '../__/profile/profile.service';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule],
  providers: [ProfileService],
  exports: [UsersComponent]
})

export class UsersModule {

}
