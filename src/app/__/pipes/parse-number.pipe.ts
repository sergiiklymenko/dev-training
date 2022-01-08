import {Pipe, PipeTransform} from '@angular/core';
import {AsYouType, CountryCode, parsePhoneNumber} from 'libphonenumber-js';

@Pipe({
  name: 'parseNumber'
})

export class parseNumberPipe implements PipeTransform {
  transform(value: string): string {
    return new AsYouType('US').input(value);
    // return this.stylePhoneNumber(value, 'US')

  }

  stylePhoneNumber(phone: string, country: CountryCode) {
    const phoneNumber = parsePhoneNumber(phone, country);
    phoneNumber.formatNational();
  }
}
