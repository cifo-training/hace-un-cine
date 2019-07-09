import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styles: []
})
export class MyMovieComponent implements OnInit {

  movieId: number;
  movie: any[];

  constructor(private movieRoute: ActivatedRoute, private movieService: MoviesService) {
    this.movie = [];
  }

  ngOnInit() {
    this.movieId = this.movieRoute.snapshot.params['id'];
    console.log(this.movieId);
    this.movie = this.movieService.getMovie(this.movieId);
    console.log(this.movie);
  }

}
