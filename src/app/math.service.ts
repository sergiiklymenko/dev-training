import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() {
  }

  ceil(num) {
    if (typeof num === 'number') {
      console.log('Number Ceiling: ' + Math.ceil(num));
    } else {
      console.log('Ceiling converted to number: ' + Math.ceil(Number(num)));
    }
  }

  round(num) {
    if (typeof num === 'number') {
      const x = Math.round(num)
      x.toFixed(2);
      console.log('Round: Number ' + x);
    } else {
      const x = Number(num);
      console.log('Round: String ' + x.toFixed(2));
    }
  }

  floor(num) {
    let x = parseInt(num.match(/\d+/));
    console.log('Floor is here:  ' + Math.floor(x));
  }

  // floor(num) {
  //   if (typeof num === 'string') {
  //     for (let i = 0; i <= num.length; i++) {
  //       let x;
  //       if (Number(num[i]) !== NaN) {
  //
  //         num = num.slice(1);
  //         console.log('New string here: ' + num);
  //       }
  //         console.log('Final string: ' + x);
  //     }
  //   } else {
  //     console.log('Here is floor number ' + Math.floor(num));
  //   }
  // }
}
