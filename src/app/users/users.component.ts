import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../__/httpClient/http-client.service';
import {ProfileService} from '../__/profile/profile.service';
import {ProfileInterface} from '../__/profile/profile.interface';
import {HttpRequestService} from '../__/httpRequest/http-request.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {
  usersList: ProfileInterface[] = [];

  constructor(private httpClient: HttpClientService,
              private httpRequest: HttpRequestService,
              private profileService: ProfileService) {
  }

  ngOnInit() {
    new Promise(
      (resolve, reject) => {
        this.httpClient.get('https://randomuser.me/api/?results=10').subscribe((data) => {
          console.log('First User:');
          console.log(data);
          if (data && data.results && data.results.length >= 9) {
            resolve(data.results);
          } else {
            reject('Can\'t not find data');
          }
        });
      }
    ).then(
      (array: ProfileInterface[]) => {
        this.usersList = array;
        console.log(array.length);
        this.handleId();
        this.profileService.saveProfile(this.usersList);
        console.log('First User:');
        console.log(this.usersList);
      }
    ).catch((error) => {
      console.log('Error catch: ');
      console.log(error);
    });
    // this.getIncorrectData('https://domainsloash.co/foo/bar');

    this.httpClient.get('https://domainsloash.co/foo/bar', {}, true)
      .then(() => {
      console.log('Inside THEN: ')
    }).catch((error) => {
        console.log('Inside catch block: ');
        console.log(error);
      }
    )
  }

  getIncorrectData(url: string): any {
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = function() {
        try {
          if (this.status == 200) {
            resolve(this.response);
          } else {
            let error = new Error(this.statusText);
            error['code'] = this.status;
            reject(error);
            console.log('Inside Error code: ');
            console.log(error);
          }
        }
        catch (e) {
          console.log(e);
        }

      };
      xhr.onerror = function() {
        reject(new Error('Network Error'));
      };
      xhr.send();
    }).then(() => {

    }).catch((error) => {
      console.log('Inside catch block: ');
      console.log(error);
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
