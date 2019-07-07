import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/global-services/films.service';
import { Film } from 'src/app/shared/classes/film';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.scss']
})
export class MovieComponent implements OnInit {
  film: Film;
  identifier: any;
  constructor(private filmsService: FilmsService, private movie: ActivatedRoute ) {

  }

  ngOnInit() {
    this.identifier = this.movie.snapshot.params.id;
    this.film = this.filmsService.getMovie(this.identifier);
  }

}
