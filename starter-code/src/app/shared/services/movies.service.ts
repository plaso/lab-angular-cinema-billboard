import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { movies } from '../data/movies.data';

@Injectable()
export class MoviesService {
  movies: Array<Movie> = movies;

  constructor() { }

  getMovies(): Array<Movie> {
    return this.movies;
  }

  getMovie(id): Movie {
    return this.movies.find(movie => movie.id === id);
  }
}
