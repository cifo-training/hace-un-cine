import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHomeComponent } from './cinema-schedule/my-home/my-home.component';
import { MyMovieComponent } from './cinema-schedule/my-movie/my-movie.component';
import { NavBarComponent } from './commons/nav-bar/nav-bar.component';
import { FooterComponent } from './commons/footer/footer.component';
import { MoviesService }  from './shared/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMovieComponent,
    NavBarComponent,
    FooterComponent,
    MyHomeComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
