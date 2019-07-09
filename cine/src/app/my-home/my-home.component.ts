import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styles: []
})
export class MyHomeComponent implements OnInit {

  movies: any[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }
}
