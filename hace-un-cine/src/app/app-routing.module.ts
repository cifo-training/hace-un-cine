import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyHomeComponent } from './cinema-schedule/my-home/my-home.component';
import { CinemaScheduleModule } from './cinema-schedule/cinema-schedule.module';
import { MyMovieComponent } from './cinema-schedule/my-movie/my-movie.component';

const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: "Home", component: MyHomeComponent },
  // {path: 'movies/:id', loadChildren: () => import('./cinema-schedule/cinema-schedule.module').then(mod => mod.CinemaScheduleModule)}
  {path: "movies/:id", component: MyMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
