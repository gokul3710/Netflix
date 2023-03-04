import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { TmdbService } from 'src/app/services/tmdb.service';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['../home/home.component.css']
})
export class MoviesComponent {

  //movies
  trendingMovies: any
  nowPlayingMovies: any
  popularMovies: any
  topRatedMovies: any
  actionMovies: any
  animationMovies: any
  adventureMovies: any
  comedyMovies: any
  documentaryMovies: any
  scienceFictionMovies: any
  thrillerMovies: any

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.handleTrendingMovies()
    this.handleNowPlayingMovies()
    this.handlePopularMovies()
    this.handleTopRatedMovies()
    this.handleActionMovies()
    this.handleAdventureMovies()
    this.handleAnimationMovies()
    this.handleComedyMovies()
    this.handleDocumentaryMovies()
    this.handleScienceFictionMovies()
    this.handleThrillerMovies()
  }

  handleTrendingMovies(){
    this.movieService.trending().subscribe(
      (data)=>{
        this.trendingMovies = data.results
      }
    )
  }

  handleNowPlayingMovies() {
    this.movieService.nowPlaying().subscribe(
      (data) => {
        this.nowPlayingMovies = data.results
      }
    )
  }

  handlePopularMovies() {
    this.movieService.popular().subscribe(
      (data) => {
        this.popularMovies = data.results
      }
    )
  }

  handleTopRatedMovies() {
    this.movieService.topRated().subscribe(
      (data) => {
        this.topRatedMovies = data.results
      }
    )
  }
  handleActionMovies() {
    this.movieService.action().subscribe(
      (data) => {
        this.actionMovies = data.results
      }
    )
  }


  handleAdventureMovies() {
    this.movieService.adventure().subscribe(
      (data) => {
        this.adventureMovies = data.results
      }
    )
  }

  handleComedyMovies() {
    this.movieService.comedy().subscribe(
      (data) => {
        this.comedyMovies = data.results
      }
    )
  }
  handleDocumentaryMovies() {
    this.movieService.documentary().subscribe(
      (data) => {
        this.documentaryMovies = data.results
      }
    )
  }
  handleThrillerMovies() {
    this.movieService.thriller().subscribe(
      (data) => {
        this.thrillerMovies = data.results
      }
    )
  }
  handleScienceFictionMovies() {
    this.movieService.scienceFiction().subscribe(
      (data) => {
        this.scienceFictionMovies = data.results
      }
    )
  }
  handleAnimationMovies() {
    this.movieService.animation().subscribe(
      (data) => {
        this.animationMovies = data.results
      }
    )
  }
}
