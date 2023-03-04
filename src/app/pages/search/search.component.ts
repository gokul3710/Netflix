import { Component, OnInit, DoCheck, OnChanges } from '@angular/core';
import { MovieModel } from '../../models/movies';
import { MoviesService } from '../../services/movies.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,DoCheck,OnChanges {

  trending: MovieModel[] 
  search: string = ''

  constructor(private tmdbService: TmdbService, private movieService: MoviesService, private userService: UserService, private router: Router){ 
    this.trending = []
  }

  
  ngOnInit(): void {
      this.handleSearch()
      this.search = this.userService.search

  }

  ngDoCheck(): void {
      if(this.search == ""){
        this.router.navigateByUrl('/')
      }
      this.search = this.userService.search
  }

  ngOnChanges(){
    this.tmdbService.getSearch(this.search).subscribe(
      (data)=>{
        this.trending = data.results
      }
    )
  }

  handleSearch(){
    this.tmdbService.getSearch(this.search).subscribe(
      (data)=>{
        this.trending = data.results
      }
    )
  }
}
