import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.scss']
})
export class MyMovieComponentComponent implements OnInit {
  public id: any;
  public movie: any = {};

  constructor(
  public movieService: MoviesService,
  public route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.route.params.subscribe((params) => {
      this.id = params.id;
      this.movie = this.movieService.getMovie(this.id);
    });
  }
}
