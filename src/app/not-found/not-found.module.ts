import {NgModule} from '@angular/core';
import {NotFoundComponent} from './not-found.component';
import {NotFoundRoutingModule} from './not-found.routing.module';
import {CoreModule} from '../__/core.module';

@NgModule({
  declarations: [NotFoundComponent],
    imports: [NotFoundRoutingModule, CoreModule],
  exports: [NotFoundComponent],
})

export class NotFoundModule {

}

