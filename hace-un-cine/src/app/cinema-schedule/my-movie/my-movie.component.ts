import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/movies.service'

@Component({
  selector: 'cine-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.scss']
})
export class MyMovieComponent implements OnInit {
  movies: any;

  constructor( private MoviesService:MoviesService ) { 
   this.movies = this.MoviesService.getMovies();
  }



  ngOnInit() {
  }

}
