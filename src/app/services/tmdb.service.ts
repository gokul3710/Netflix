import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  
  readonly baseurl = environment.url ?? process.env['BASE_URL']
  readonly apikey = environment.api ?? process.env['API']

  constructor(private http:HttpClient) { }


  getTrending(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`); 
  }

  getSearch(data: string): Observable<any>{
    console.log(data);
    
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data}`);
  }
  
}

