import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../__/httpClient/http-client.service';
import {ProfileService} from '../__/profile/profile.service';
import {ProfileInterface} from '../__/profile/profile.interface';
import {HttpRequestService} from '../__/httpRequest/http-request.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./user.component.css']
})

export class UsersComponent implements OnInit {
  usersList: ProfileInterface[] = [];
  end = 5;

  constructor(private httpClient: HttpClientService,
              private httpRequest: HttpRequestService,
              private profileService: ProfileService) {
  }

  ngOnInit() {
    new Promise(
      (resolve, reject) => {
        this.httpClient.get('https://randomuser.me/api/?results=50').subscribe((data) => {
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

    this.httpClient.get('https://randomuser.me/api/?results=10', {}, true).then(
      (result) => {
        try {
          if (result.file.name > 0) {
            console.log(result.file.name)
          }
        }
        catch (error) {
          throw new Error('This is error here Randomuser.me')
        }
      }
    ).catch((error) => {
      console.log('Inside catch block: ');
      console.log(error);
    });
  }

  handleId() {
    this.usersList.forEach((profile:ProfileInterface) => {
      profile.id = {
        value: this.randomString()
      };
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
