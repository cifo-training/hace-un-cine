import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MoviesServiceService} from './services/movies-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
