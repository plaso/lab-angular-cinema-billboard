import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { MoviesService } from './shared/services/movies.service';

import { AppComponent } from './app.component';
import { MyMovieComponent } from './components/my-movie/my-movie.component';
import { MyHomeComponent } from './components/my-home/my-home.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMovieComponent,
    MyHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
