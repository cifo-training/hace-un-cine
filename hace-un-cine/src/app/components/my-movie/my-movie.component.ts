import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../shared/models/movie-model';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'amf-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.scss']
})
export class MyMovieComponent  implements OnInit {

  public id: any;
  public movie: Movie;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public service: MoviesService
  ) { }

  ngOnInit() {
    // this.movie = this.service.getMovie(Number(this.route.snapshot.params['id']));

    this.route.params
    .subscribe(params => {
      this.id = params.id;
      this.movie = this.service.getMovie(Number(this.id));
    });
  }

  goBack() {
    this.router.navigate([`/home`]);
  }
}
