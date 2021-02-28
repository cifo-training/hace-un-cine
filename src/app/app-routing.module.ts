import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyhomeComponent } from '../app/myhome/myhome.component';
import { MymovieComponent } from '../app/mymovie/mymovie.component';


const routes: Routes = [
  {path: '', redirectTo: 'myhome', pathMatch: 'full'},
  {path: 'myhome', component: MyhomeComponent},
  {path: 'movie/:id', component: MymovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
