import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  
  readonly baseurl = "https://api.themoviedb.org/3";
  readonly apikey = "08cc33bd5ae3a747598ce2ad84376e66";

  constructor(private http:HttpClient) { }


  getTrending(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`); 
  }

  getSearch(data: string): Observable<any>{
    console.log(data);
    
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data}`);
  }
  
}

