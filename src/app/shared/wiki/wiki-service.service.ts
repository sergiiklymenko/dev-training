import {Injectable} from '@angular/core';
import {HttpRequestService} from '../../__/httpRequest/http-request.service';

@Injectable({
  providedIn: 'root'
})

export class WikiServiceService {


  constructor(private httpService: HttpRequestService) {

  }

   getWiki() {
     this.httpService.getRequest('https://dodevcode.com:4488/other/ConfigData').then((data: any) => {
        let newData = JSON.parse(data);
        console.log(newData.result);
        return newData.result.WIKI;
      });
  }

  getStudy() {
    this.httpService.getRequest('https://dodevcode.com:4488/other/ConfigData').then((data: any) => {
      let studyData = JSON.parse(data);
      console.log(studyData);
      return studyData.result.STUDY;
    })
  }

  postBody() {
    const data = 'title=Post%20Title&body=Body';
    this.httpService.postRequest('http://jsonplaceholder.typicode.com/posts', data).then((data: any) => {
      console.log(data.id);
      console.log(data.title);
      return data;
    })
  }






}
