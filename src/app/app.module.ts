import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MoviesServiceService} from './services/movies-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MoviesServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
