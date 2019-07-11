import { Component, OnInit} from '@angular/core';
import { MoviesService } from '../../shared/services/movies.service';
import { Film } from '../../shared/models/movie.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './movies-component.html',
  styleUrls: ['./movies-component.css'],

})
export class MyMoviesComponent implements OnInit{

  private patternWithSnapshot: string = '';

  private movies: Array<Film> = this.service.getMovies();

  constructor(private service: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.patternWithSnapshot = this.route.snapshot.paramMap.get('pattern');

  }

  onClickGoToMovieComponent(id: string): void {
    this.router.navigate([`/movie/${id}`]);
  }
}
