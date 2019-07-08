import { Injectable } from '@angular/core';
import {Movie, movies} from '../shared/data/data';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  movies: Array<Movie> = movies;

getMovies() { //Devuelve un array de todas las películas.

return this.movies;


}

getMovie(id: string)  { //Recibe un id de película como parámetro y devuelve el objeto correspondiente.

  let movieItem: Movie;

  this.movies.forEach((singleMovie) => {
    if (singleMovie.id === Number(id)) {
      movieItem = singleMovie;
    }
  });
  return movieItem;
}



export class MoviesServiceService {

  constructor() { }
}
