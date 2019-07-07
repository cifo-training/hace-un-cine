import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyComponentsRoutingModule } from './my-components-routing.module';
import { MovieComponent } from './my-movie/my-movie.component';

@NgModule({
  declarations: [MovieComponent],
  imports: [
    CommonModule,
    MyComponentsRoutingModule
  ],
  exports: [MovieComponent]
})
export class MyComponentsModule { }
