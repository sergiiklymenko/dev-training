import {Injectable} from '@angular/core';
import {StorageService} from '../storage/storage.service';

export interface UserInterface {
  id: string;
  email: string;
  password: string;
}

@Injectable()
export class UserService implements UserInterface {
  id = '';
  email = '';
  password = '';
  isAuth = false;

  arr: UserInterface [] = [];

  readonly key = 'userArray';
  readonly userKey = 'userKey';

  constructor(private storage: StorageService) {
    const foundUser = this.storage.getData(this.userKey);
    if (foundUser) {
      this.id = foundUser.id;
      this.email = foundUser.email;
      this.password = foundUser.password;
      this.isAuth = true;
    }
    // console.log(this)
    this.arr = this.storage.getData(this.key) || this.arr;
    // console.log('Example Array++')
    // console.table(this.arr);
  }

  save(email: string, password: string) {
    if (!this.findUser(email)) {
      this.arr.push({
        id: this.randomId(),
        email: email,
        password: password
      });
      this.storage.setData(this.key, this.arr);
    } else {
      console.log('Email is not saved!');
    }
  }

  startSession(userData: UserInterface) {
    this.storage.setData(this.userKey, userData);
  }

  closeSession() {
    this.storage.removeData(this.userKey);
  }

  findUser(email: string) {
    let user: UserInterface;
    this.arr.forEach((data: UserInterface) => {
      if (data.email === email) {
        user = data;
      }
    });
    return user;
  }

  randomId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

}
