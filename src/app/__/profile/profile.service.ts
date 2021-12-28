import {Injectable} from '@angular/core';
import {StorageService} from '../storage/storage.service';
import {ProfileInterface} from './profile.interface';

@Injectable()

export class ProfileService {
  profilesArray: ProfileInterface[] = [];
  readonly profileKey = 'profileKey';

  constructor(private storageService: StorageService) {

  }

  saveProfile(data: any) {
    if (data) {
      this.profilesArray = data;
      this.storageService.setData(this.profileKey, this.profilesArray);
      console.log('List of Users is saved');
    } else {
      console.log('List of users is not saved');
    }
  }

  getProfile() {
    return this.storageService.getData(this.profileKey) || [];
  }

}
