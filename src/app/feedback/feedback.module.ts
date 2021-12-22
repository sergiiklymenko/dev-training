import {NgModule} from '@angular/core';
import {FeedbackComponent} from './feedback.component';
import {FeedbackRoutingModule} from './feedback.routing.module';

@NgModule({
  declarations: [FeedbackComponent],
  imports: [FeedbackRoutingModule],
  exports: [FeedbackComponent]
})

export class FeedbackModule {

}
