import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
//import { Location } from '@angular/common';
import { Movie } from '../shared/movie';
import { DatosMoviesService } from '../services/datos-movies.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.scss']
})
export class MyMovieComponent implements OnInit {

  movies: Movie[];


  constructor(private datopeli: DatosMoviesService,
              //private route: ActivatedRoute,
              //private location: Location
              ) { }

  ngOnInit() {
    this.datopeli.getMovie(5);
  }

  getMovie(id: number): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    this.datopeli.getMovie(id);

  }

  getMovies(): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    this.datopeli.getMovies();

  }
  /*
  getMovies() {
    this.datopeli.getMovies();
  }*/
}
