import {NgModule} from '@angular/core';
import {NotFoundComponent} from './not-found.component';
import {NotFoundRoutingModule} from './not-found.routing.module';
import {CoreModule} from '../__/core.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [NotFoundComponent],
    imports: [NotFoundRoutingModule, CoreModule, CommonModule],
  exports: [NotFoundComponent],
})

export class NotFoundModule {

}

