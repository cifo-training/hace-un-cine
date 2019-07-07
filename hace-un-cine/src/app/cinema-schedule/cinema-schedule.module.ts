import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaScheduleRoutingModule } from './cinema-schedule-routing.module';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [MyHomeComponent, MyMovieComponent],
  imports: [
    CommonModule,
    CinemaScheduleRoutingModule,
    AppRoutingModule,   
  ],
  exports: [MyHomeComponent, MyMovieComponent]
})
export class CinemaScheduleModule { }
