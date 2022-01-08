import {Pipe, PipeTransform} from '@angular/core';
import * as format from 'creditcardutils'

@Pipe({
  name: 'ccFormat'
})

export class ccFormatPipe implements PipeTransform {

  transform(value: string): string {
    console.log('Inside format pipe')
    // let creditcardutils = require('creditcardutils');
    return format.formatCardNumber(value);
  }

}
