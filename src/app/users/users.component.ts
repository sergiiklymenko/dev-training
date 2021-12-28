import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../__/httpClient/http-client.service';
import {ProfileService} from '../__/profile/profile.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {
  usersList = [];

  constructor(private httpClient: HttpClientService,
              private profileService: ProfileService) {
  }

  ngOnInit() {
    this.httpClient.get('https://randomuser.me/api/?results=10').subscribe((data) => {
      console.log('First User:');
      console.log(data.results);
      this.usersList = data.results;
      console.log(data.results.length);
    });
  }

  saveUserToProfile(data) {
    this.profileService.saveProfile(data);
  }

}
