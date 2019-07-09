import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyHomeComponent } from "./components/my-home/my-home.component";

const routes: Routes = [
  { path: "home", component: MyHomeComponent },
  { path: "movie/:id", component: MyHomeComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  declarations: [],
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
