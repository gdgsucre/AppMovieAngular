import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
//services
import { MoviesService } from './services/movies.service';

const routes: Routes = [
  { path:'', component:MoviesComponent},
  { path:'movies', component:MoviesComponent},
  { path:'add', component:AddMoviesComponent},
  { path:'**', component:MoviesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    AddMoviesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
