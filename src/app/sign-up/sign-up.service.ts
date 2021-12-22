import {Injectable} from '@angular/core';

@Injectable()
export class SignUpService {
  private lastName: string = 'Klim';
  protected age = 30;
  firstName: string = 'Serg';


  lookUpData(): string[] {
    return ['Sam', 'Steve', 'John'];
  }

  getLastName () {
    return this.lastName;
  }

}
