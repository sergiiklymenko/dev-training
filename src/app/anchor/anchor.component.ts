import {Component, Input} from '@angular/core';
import {AnchorInterface} from './anchor.interface';

@Component({
  selector: 'app-anchor',
  templateUrl: 'anchor.component.html'
})

export class AnchorComponent implements AnchorInterface {
  @Input() url: string;
  @Input() title: string;

}

