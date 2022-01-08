import {Component, OnInit, Output} from '@angular/core';
import {UserService} from '../__/user/user.service';
import {HttpClientService} from '../__/httpClient/http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginEmail: string;
  loginPassword: string;
  isAuth = false;

  constructor(private userService: UserService,
              private httpClient: HttpClientService) {
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
    this.httpClient.get('https://randomuser.me/api/').subscribe((result) => {
      console.log('Result:');
      console.log(result)
    })
  }
}

