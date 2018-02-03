import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';

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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
