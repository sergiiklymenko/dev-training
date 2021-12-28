import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProfileComponent} from './profile.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'profile/:id', component: ProfileComponent}
    ])]
})

export class ProfileRoutingModule {

}
