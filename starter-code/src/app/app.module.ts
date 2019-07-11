import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/general/header/header.component';
import { MyMoviesComponent } from './components/movie-list/movies-component';
import { MyMovieComponent } from './components/movie-item/movie-component';

import { NotFoundComponent } from './components/general/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMoviesComponent,
    MyMovieComponent,
    HeaderComponent,

    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
