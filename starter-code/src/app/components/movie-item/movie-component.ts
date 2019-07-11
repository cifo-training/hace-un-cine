import { Component, OnInit } from '@angular/core';
import { Film } from '../../shared/models/movie.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './movie-component.html',
  styleUrls: ['./movie-component.css'],
})
export class MyMovieComponent implements OnInit {
  idMovie: number;
  movieToShow: Film;
  pattern = '';

  constructor(private route: ActivatedRoute, private router: Router, private service: MoviesService) { }

  ngOnInit() {
    this.idMovie = Number(this.route.snapshot.paramMap.get('id'));
    this.movieToShow = this.service.getMovie(this.idMovie);
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}

