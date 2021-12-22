import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntegerService {

  constructor() {
  }

  getInt(num) {
    num.forEach(element => {
      if (typeof element === 'number') {
        console.log('Here is array numbers: ' + element);
      } else {
        let x = Number(element);
        console.log('Here is string converted to number ' + x);
      }
    });
  }

  getNumber(num) {
    let x = num.replace(/[^0-9]/g, '');
    console.log('Here is number from getNumber ' + x);
  }

  getFloat(a, b) {
    let x = (a * 100) + (b * 100);
    let z = x / 100;
    console.log('Here is float from getFloat ' + z);
  }
}
