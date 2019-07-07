import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './my-movie/my-movie.component';

const routes: Routes = [
  {path:'movie/:id',component:MovieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyComponentsRoutingModule { }
