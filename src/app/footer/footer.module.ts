import {NgModule} from '@angular/core';
import {FooterComponent} from './footer.component';
import {CommonModule} from '@angular/common';
import {AnchorModule} from '../anchor/anchor.module';
import {MenuModule} from '../menu/menu.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, AnchorModule, MenuModule],
  exports: [FooterComponent]
})

export class FooterModule {

}

