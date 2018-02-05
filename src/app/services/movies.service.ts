import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class MoviesService {
  url:string;
  constructor( private http: HttpClient) {
    this.url = "http://localhost:3000";
   }

   getMovies(){
     return this.http.get(this.url+"/movies");
   }

   addMovie(data):Observable<any>{
     return this.http.post(this.url+"/movies",data);
   }

   deleteMovie(id){
     return this.http.delete(this.url+"/movies/"+id);
   }

   updateMovie(movie,id):Observable<any>{
     let data = JSON.stringify(movie);
     return this.http.put(this.url+"/movies/"+id,data);
   }

}
