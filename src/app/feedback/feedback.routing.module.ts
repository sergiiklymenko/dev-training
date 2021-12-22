import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FeedbackComponent} from './feedback.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'feedback', component: FeedbackComponent
      }
      ]
    )
  ],
  exports: [RouterModule]
})

export class FeedbackRoutingModule {

}
