import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/global-services/films.service';
import { Film } from 'src/app/shared/classes/film';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss']
})
export class MyHomeComponent implements OnInit {
  films: Array<Film>;
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(private filmsService: FilmsService) {
    this.films = filmsService.getMovies();
   }

  ngOnInit() {
  }

}
