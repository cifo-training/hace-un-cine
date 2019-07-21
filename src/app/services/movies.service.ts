import { Injectable } from '@angular/core';
import { Movie, movies } from '../movies-list';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Array<Movie> = movies;

  constructor() { }

  getMovies() {
    return this.movies;
  }

  getMovie(id: string) {
    let movieItem: Movie;

    this.movies.forEach((singleMovie) => {
      if (singleMovie.id === Number(id)) {
        movieItem = singleMovie;
      }
    });
    return movieItem;
  }
}
