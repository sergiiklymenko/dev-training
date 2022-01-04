import {NgModule} from '@angular/core';
import {HighlightDirective} from './directive/highlight.directive';

@NgModule({
  declarations: [HighlightDirective],
  exports: [HighlightDirective]
})

export class CoreModule {

}
