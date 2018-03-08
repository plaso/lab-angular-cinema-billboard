import { Routes } from '@angular/router';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { MyMovieComponent } from './components/my-movie/my-movie.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MyHomeComponent },
  { path: 'movie/:id', component: MyMovieComponent }
];
