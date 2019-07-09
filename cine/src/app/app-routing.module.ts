import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';

const routes: Routes = [
  { path: '', component: MyHomeComponent },
  { path: ':id', component: MyMovieComponent },
  { path: '', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
