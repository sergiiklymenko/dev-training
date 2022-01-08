import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ccFormat'
})

export class ccFormatPipe implements PipeTransform {
  creditCardUtils = require('creditcardutils');

  transform(value: string): string {
    console.log('Inside format pipe')
    return this.creditCardUtils.formatCardNumber(value);
  }

}
