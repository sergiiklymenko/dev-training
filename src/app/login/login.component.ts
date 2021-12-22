import {Component, OnInit, Output} from '@angular/core';
import {UserService} from '../__/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginEmail: string;
  loginPassword: string;
  isAuth = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  login() {
    const user = this.userService.findUser(this.loginEmail);
    if (user && user.password === this.loginPassword) {
      console.log('Session has started');
      this.userService.startSession(user);
    } else {
      console.log('User is not found');
    }
  }

}

