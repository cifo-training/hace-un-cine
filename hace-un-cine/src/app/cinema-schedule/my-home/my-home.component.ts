import { Component, OnInit } from '@angular/core';
import { MoviesService, movies } from '../../shared/movies.service'

@Component({
  selector: 'cine-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss']
})
export class MyHomeComponent implements OnInit {
  movies: any;
  constructor( private MoviesService:MoviesService ) { 
   this.movies = this.MoviesService.getMovies();
  }

  ngOnInit() {
    console.log(this.movies)
  }

}
