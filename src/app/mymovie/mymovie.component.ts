import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-mymovie',
  templateUrl: './mymovie.component.html',
  styleUrls: ['./mymovie.component.scss']
})
export class MymovieComponent implements OnInit {
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
