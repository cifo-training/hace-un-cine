import { Injectable } from '@angular/core';
import {movies} from '../shared/data/data';

@Injectable({
  providedIn: 'root'
})

function getMovies() { //Devuelve un array de todas las películas.

return movies;


}

function getMovie()  { //Recibe un id de película como parámetro y devuelve el objeto correspondiente.

const id = movies[0];

return id;


}


export class MoviesServiceService {

  constructor() { }
}
