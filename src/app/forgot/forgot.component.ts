import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})

export class ForgotComponent implements OnInit {
  @Input() email: string;
  @Input() password: string;
  constructor() {
  }

  ngOnInit() {
  }
}
