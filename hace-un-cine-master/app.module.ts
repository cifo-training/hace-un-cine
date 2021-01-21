import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosMoviesService } from './services/datos-movies.service';
import { MyMovieComponent } from './my-movie/my-movie.component';
import { MyHomeComponent } from './my-home/my-home.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMovieComponent,
    MyHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DatosMoviesService],
  bootstrap: [AppComponent],
  exports: [MyMovieComponent, MyHomeComponent]
})
export class AppModule { }
