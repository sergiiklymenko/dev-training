import {NgModule} from '@angular/core';
import {UsersComponent} from './users.component';
import {UsersRoutingModule} from './users.routing.module';
import {CommonModule} from '@angular/common';
import {ProfileService} from '../__/profile/profile.service';
import {HttpRequestService} from '../__/httpRequest/http-request.service';
import {CoreModule} from '../__/core.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, CoreModule],
  providers: [ProfileService, HttpRequestService],
  exports: [UsersComponent]
})

export class UsersModule {

}
