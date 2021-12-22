import {Component} from '@angular/core';
import {AnchorInterface} from '../anchor/anchor.interface';
import {StorageService} from '../__/storage/storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})

export class FooterComponent {

  links: AnchorInterface[] = [
    {url: 'contacts', title: 'Contacts'},
    {url: 'career', title: 'Career'},
    {url: 'directions', title: 'Directions'}
  ]

  constructor(private storage: StorageService) {
    // console.log('This is setData: ' + this.storage.setData('userId', 'sdfghjkl'));
  }

}

