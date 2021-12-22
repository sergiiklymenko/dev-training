import {Component, Input, OnInit} from '@angular/core';

class obj {
  static age = 27;

  public name = 'Sergei';
  private lastname = '';
  protected title = '';
}

class newObj extends obj {
  setName(name = '') {
    return this.name = name;
  }
}

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent  implements OnInit {
  count = 0;
  @Input() autoStart = false;
  private timerId: any;

  constructor() {
    let newInstance = new newObj();
    newInstance.setName('Привет')

    obj.age = 50;

    console.log(obj.name);
    console.log(obj.age);
  }

  ngOnInit() {
    if (this.autoStart) {
      this.startTimer()
    }
  }

  resetInterval() {
    clearInterval(this.timerId);
  }

  startTimer() {
    this.resetInterval()
    this.timerId = setTimeout(() => {
      this.count++;
      this.startTimer();
    }, 1000)
  }

  pauseTimer() {
    this.resetInterval()
  }

  stopTimer() {
    this.resetInterval()
    this.count = 0;
  }
}


