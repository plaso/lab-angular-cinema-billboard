import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../shared/services/movies.service';
import { Movie } from '../../shared/models/movie.model';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movie: Movie;

  constructor(
    private routes: ActivatedRoute,
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      this.movie = this.moviesService.getMovie(Number(params['id']));
    });
  }

}
