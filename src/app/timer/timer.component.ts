import {Component, Input, OnInit} from '@angular/core';

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
