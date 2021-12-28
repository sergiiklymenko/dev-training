import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../__/httpClient/http-client.service';
import {ProfileService} from '../__/profile/profile.service';
import {ProfileInterface} from '../__/profile/profile.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {
  usersList: ProfileInterface[] = [];

  constructor(private httpClient: HttpClientService,
              private profileService: ProfileService) {
  }

  ngOnInit() {
    this.httpClient.get('https://randomuser.me/api/?results=10').subscribe((data) => {
      console.log('First User:');
      console.log(data.results);
      if (data && data.results) {
        this.usersList = data.results;
        console.log(data.results.length);
        this.handleId();
        this.profileService.saveProfile(this.usersList);
        console.log('First User:');
        console.log(this.usersList);
      }
    });
  }

  handleId() {
    this.usersList.forEach((profile:ProfileInterface) => {
      if (!profile.id || !profile.id.value || profile.id.value === '') {
        profile.id = {
          value: this.randomString()
        };
      }
      profile.id.value = profile.id.value.replace(' ', '');
      profile.id.value = profile.id.value.replace('-', '');
      profile.id.value = profile.id.value.replace('.', '');
    });
  }

  randomString(length = 5): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

}
