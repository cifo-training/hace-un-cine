import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/movie';
import { DatosMoviesService } from '../services/datos-movies.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss'],
})
export class MyHomeComponent implements OnInit {

  constructor(private datospelis: DatosMoviesService) { }

  movies: Movie[];

  ngOnInit() {
// tslint:disable-next-line: no-unused-expression
    this.datospelis.getMovies();
  }


}

