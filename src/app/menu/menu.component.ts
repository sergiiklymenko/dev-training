import {Component, Input} from '@angular/core';
import {AnchorInterface} from '../anchor/anchor.interface';
import {StorageService} from '../__/storage/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})

export class MenuComponent {

  @Input() links: AnchorInterface[];

  constructor(private storage: StorageService) {
    // console.log('This is getData: ' + this.storage.getData('userId'));
  }

}

