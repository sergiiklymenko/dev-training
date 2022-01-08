import {NgModule} from '@angular/core';
import {HighlightDirective} from './directive/highlight.directive';
import {ExchangePipe} from './pipes/exchange.pipe';
import {ScrollDirective} from './directive/scroll.directive';
import {ccFormatPipe} from './pipes/cc-format.pipe';
import {parseNumberPipe} from './pipes/parse-number.pipe';

@NgModule({
  declarations: [HighlightDirective, ExchangePipe, ScrollDirective, ccFormatPipe, parseNumberPipe],
  exports: [HighlightDirective, ExchangePipe, ScrollDirective, ccFormatPipe, parseNumberPipe]
})

export class CoreModule {

}
