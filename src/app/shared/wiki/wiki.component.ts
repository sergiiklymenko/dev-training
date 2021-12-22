import {Component, OnInit} from '@angular/core';
import {WikiServiceService} from './wiki-service.service';
import {HttpRequestService} from '../../__/httpRequest/http-request.service';



class WikiService {

  static cityList = [];

  static createCityList(...args) {
    args.forEach((val: any) => {
      this.cityList.push(val);
    })
  }
}

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css'],
  providers: [HttpRequestService]
})

export class WikiComponent implements OnInit {

  countryList;
  getWiki;
  cities


  constructor(private wikiService: WikiServiceService) {
    wikiService.getWiki();
    WikiService.createCityList('Orlando', 'Miami', 'Tampa');
    this.cities = WikiService.cityList;
  }

  ngOnInit() {
    this.wikiService.getWiki();
    this.wikiService.getStudy();
    this.wikiService.postBody();
  }


}
