import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'exchange'
})

export class ExchangePipe implements PipeTransform {
  transform(value: string): string {
    return this.replaceAll(value, 'N', 'RUB' );
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
  }

  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\$&');
  }
}
