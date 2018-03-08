import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/services/movies.service';
import { Movie } from '../../shared/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  movies: Array<Movie> = [];

  constructor(
    private contactsService: MoviesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.movies = this.contactsService.getMovies();
  }

}
