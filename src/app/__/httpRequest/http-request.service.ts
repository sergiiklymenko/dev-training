import {Injectable} from '@angular/core';

@Injectable()

export class HttpRequestService {

  getRequest(url: string): any {
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = function() {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          let error = new Error(this.statusText);
          error['code'] = this.status;
          reject(error);
        }
      };
      xhr.onerror = function() {
        reject(new Error('Network Error'));
      };
      xhr.send();
    });
  }

  postRequest(url: string, data: string): any {
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = function() {
        if (this.status == 201) {
          resolve(JSON.parse(this.response));
        } else {
          let error = new Error(this.statusText);
          error['code'] = this.status;
          reject(error);
        }
      };
      xhr.onerror = function() {
        reject(new Error('Network Error'));
      };
      xhr.send(data);
    });
  };

}
