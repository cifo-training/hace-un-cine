import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMovieComponent } from './my-movie/my-movie.component';

const routes: Routes = [
  // {path: '/:id', component: MyMovieComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CinemaScheduleRoutingModule { }
