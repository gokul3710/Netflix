import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { SeriesService } from '../../services/series.service';
TmdbService
SeriesService

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['../home/home.component.css']
})
export class TvShowsComponent implements OnInit {

  popularSeries: any
  topRatedSeries: any
  airingTodaySeries: any

  constructor(private tmdbService:TmdbService, private seriesService: SeriesService) { }

  ngOnInit(): void {
      this.handlePopularSeries()
      this.handleTopRatedSeries()
      this.handleArrivingTodaySeries()
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
