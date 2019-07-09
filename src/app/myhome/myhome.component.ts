import { Component, OnInit } from '@angular/core';
import { Movie, movies } from '../movies-list';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.scss']
})
export class MyhomeComponent implements OnInit {
  movies: Array<Movie> = movies;

  constructor(public movieService: MoviesService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

}
