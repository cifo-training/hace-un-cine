import { Component } from '@angular/core';
import { MoviesService } from './Services/movies.service';
import { Movie } from './shared/interfaces/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MoviesService]
})
export class AppComponent {
  public title = 'hace-un-cine';
  public salas: Movie[];

  constructor(public ServicioSalas: MoviesService) {
    this.salas = ServicioSalas.getMovies();
  }
}
