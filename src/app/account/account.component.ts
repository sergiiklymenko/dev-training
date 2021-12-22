import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../__/user/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})

export class AccountComponent implements OnInit {
  @Input() acctAuth: boolean


  constructor(protected userService: UserService) {
  }
  ngOnInit() {
    this.acctAuth = this.userService.isAuth;
    console.log('Account Auth ' + this.acctAuth);
  }
}
