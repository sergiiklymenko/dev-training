import {NgModule} from '@angular/core';
import {MenuComponent} from './menu.component';
import {AnchorModule} from '../anchor/anchor.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [MenuComponent],
  imports: [AnchorModule, CommonModule],
  exports: [MenuComponent]
})

export class MenuModule {

}
