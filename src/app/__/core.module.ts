import {NgModule} from '@angular/core';
import {HighlightDirective} from './directive/highlight.directive';
import {ExchangePipe} from './pipes/exchange.pipe';

@NgModule({
  declarations: [HighlightDirective, ExchangePipe],
  exports: [HighlightDirective, ExchangePipe]
})

export class CoreModule {

}
