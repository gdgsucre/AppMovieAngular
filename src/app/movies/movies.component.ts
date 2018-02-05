import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  private moviesServices: any;
  movies: any = null;
  constructor(moviesServices: MoviesService) {
    this.moviesServices = moviesServices;
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.moviesServices
      .getMovies()
      .subscribe(
      data => {
        console.log(data);
        this.movies = data;
      },
      err => {
        console.log(err);
      }
      )
  }

  deleteMovie(id){
    console.log(id);
  }
}
