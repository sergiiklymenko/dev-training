import { Component } from '@angular/core';

class FlightService implements Parent {
  setProperty(name: string, value: string) {
    this[name] = value;
  }

  getProperty(propName: string, propTitle: string) {
    return this[propName] + ' ' + this[propTitle];
  }
}

interface Parent {
setProperty(name: string, title: string);
getProperty(propName: string, propTitle: string);
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devtraining';
  colorOn = true;
  testNumber = 5;
  address = {
    addressLine1: '836 Shrebourne',
    addressLin2: 'Orlando',
  };
  testN = NaN;
  testU = undefined;
  testStr = 'winter';
  result: any;

  constructor() {
    // const testflight = new FlightService();
    // for (let x in this) {
    //   if (this[x]) {
    //     testflight.setProperty(x, this[x]);
    //   }
    // }
    // console.log('Test flight ', testflight);
  }

  testMethod() {
    const array = [true, 1, {num: 3}, NaN, undefined, 'text'];
    console.log('Array is here ', array);
  }


}
