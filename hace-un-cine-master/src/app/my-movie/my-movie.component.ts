import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { Location } from '@angular/common';
import { Movie } from '../shared/movie';
import { DatosMoviesService } from '../services/datos-movies.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.scss']
})
export class MyMovieComponent implements OnInit {

  movie: Movie;
  selectedMovie: any;


  constructor(private datopeli: DatosMoviesService,
              private route: ActivatedRoute,
              //private location: Location
              ) { }

  ngOnInit() {
    /* NOK
    this.route.params.subscribe(miParams => {this.selectedMovie = miParams.id; });
    this.datopeli.getMovie$(this.selectedMovie);
    */
   this.selectedMovie = this.route.snapshot.params.id;
    this.movie = this.datopeli.getMovie(this.selectedMovie);
  }

 /* getMovie$() {
    const id = +this.route.snapshot.paramMap.get('id');
    return this.datopeli.getMovie(id);

  }*/




}
