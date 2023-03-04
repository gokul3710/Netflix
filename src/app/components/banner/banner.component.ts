import { Component, Input, DoCheck } from '@angular/core';
import { MovieModel } from 'src/app/models/movies';
import { TVShowModel } from 'src/app/models/tvshows';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements DoCheck {

  @Input() movie: MovieModel | TVShowModel | null
  link: string = ""
  title: string = ""

  constructor(){
    this.movie = null
  }

  ngDoCheck(): void {
    this.title = this.getTitleOrName(this.movie)
    this.link = "https://image.tmdb.org/t/p/original/" + this.movie?.backdrop_path
  }
  
  isMovieModel(obj: any): obj is MovieModel {
    return obj && typeof obj.title === "string" ;
  }
  
  isTVShowModel(obj: any): obj is TVShowModel {
    return obj && typeof obj.name === "string" ;
  }

  getTitleOrName(obj: MovieModel | TVShowModel | null): string {
    if (this.isMovieModel(obj)) {
      return obj.title;
    } else if (this.isTVShowModel(obj)) {
      return obj.name;
    }  
    return ''  
  }
}
