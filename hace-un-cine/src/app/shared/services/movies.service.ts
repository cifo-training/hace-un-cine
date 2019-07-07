import { Injectable } from '@angular/core';
import { Movie } from '../models/movie-model';
import { MoviesDB } from '../../shared/data/movies-db';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public movies: Array<Movie> = MoviesDB;

  public indexToEdit: number;
  public title: string;
  public year: string;

  constructor() {
    this.title = '';
    this.year = '';
  }

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    return this.movies.find(item => item.id === id);
  }
}
