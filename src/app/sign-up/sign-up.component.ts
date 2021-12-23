import {AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, OnInit} from '@angular/core';
import {SignUpService} from './sign-up.service';
import {UserService} from '../__/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [SignUpService]
})

export class SignUpComponent implements OnInit {
  signUpEmail: string;
  signUpPassword: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit');
  // }
  //
  // ngDoCheck() {
  //   console.log('ngDoCheck');
  // }
  //
  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked');
  // }
  //
  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked');
  // }



  saveCredentials() {
    this.userService.save(this.signUpEmail, this.signUpPassword);
  }

  getData() {
    return 'Fox';
  }

}
