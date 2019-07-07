import { Injectable } from '@angular/core';
import films from '../shared/classes/film';
import { Film } from '../shared/classes/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  filmsAll: Array<Film>;
  constructor() {
    this.filmsAll = films;
  }
  getMovies() {
    return this.filmsAll;
  }
  getMovie(id) {
    const movie = this.filmsAll.find(e => {
      return e.id == id;
    });
    return movie;
  }
}

