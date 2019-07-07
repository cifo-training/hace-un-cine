import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'amf-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss']
})

export class MyHomeComponent implements OnInit {

  public movies: Array<any>;

  constructor( private router: Router, private service: MoviesService ) { }

  ngOnInit() {
    this.movies = this.service.getMovies();
  }


}
