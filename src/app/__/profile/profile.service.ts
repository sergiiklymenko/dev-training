import {Injectable} from '@angular/core';
import {StorageService} from '../storage/storage.service';

@Injectable()

export class ProfileService {
  profileArray = [];
  readonly profileKey = 'profileKey';

  constructor(private storageService: StorageService) {

  }

  saveProfile(data: any) {
    if (data) {
      this.profileArray.push(data);
      this.storageService.setData(this.profileKey, this.profileArray);
      console.log('User is saved');
    } else {
      console.log('List of users are not saved');
    }
  }

  getProfile() {
    return this.storageService.getData(this.profileKey) || {};
  }

}
