import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { MoviesService } from '../../services/movies.service';
import { SeriesService } from '../../services/series.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trending: any

  //movies
  nowPlayingMovies: any
  popularMovies: any
  topRatedMovies: any
  actionMovies: any
  animationMovies: any
  adventureMovies: any


  //series
  popularSeries: any
  topRatedSeries: any
  airingTodaySeries: any

  constructor(private tmdbService:TmdbService, private movieService: MoviesService, private seriesService:SeriesService){}

  ngOnInit(): void {
      this.handleTrending()
      this.handleNowPlayingMovies()
      this.handlePopularMovies()
      this.handleTopRatedMovies()
      this.handleActionMovies()
      this.handleAdventureMovies()
      this.handleAnimjationMovies()
      this.handlePopularSeries()
      this.handleTopRatedSeries()
      this.handleArrivingTodaySeries()
  }

  handleTrending(){
    this.tmdbService.getTrending().subscribe(
      (data)=>{
        this.trending = data.results
        console.log(this.trending);
        
      }
    )
  }

  handleNowPlayingMovies(){
    this.movieService.nowPlaying().subscribe(
      (data)=>{
        this.nowPlayingMovies = data.results
      }
    )
  }

  handlePopularMovies(){
    this.movieService.popular().subscribe(
      (data)=>{
        this.popularMovies = data.results
      }
    )
  }

  handleTopRatedMovies(){
    this.movieService.topRated().subscribe(
      (data)=>{
        this.topRatedMovies = data.results
      }
    )
  }
  handleActionMovies(){
    this.movieService.action().subscribe(
      (data)=>{
        this.actionMovies = data.results
      }
    )
  }


  handleAdventureMovies(){
    this.movieService.adventure().subscribe(
      (data)=>{
        this.adventureMovies = data.results
      }
    )
  }

  handleAnimjationMovies(){
    this.movieService.animation().subscribe(
      (data)=>{
        this.animationMovies = data.results
      }
    )
  }

  handlePopularSeries(){
    this.seriesService.popular().subscribe(
      (data)=>{
        this.popularSeries = data.results
        console.log(this.popularSeries);
        
      }
    )
  }

  handleTopRatedSeries(){
    this.seriesService.topRated().subscribe(
      (data)=>{
        this.topRatedSeries = data.results
        
      }
    )
  }

  handleArrivingTodaySeries(){
    this.seriesService.airingToday().subscribe(
      (data)=>{
        this.airingTodaySeries = data.results 
      }
    )
  }
}
