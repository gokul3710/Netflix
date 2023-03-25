import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieModel } from '../../models/movies';
import { TVShowModel } from '../../models/tvshows';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieId: string | null = ''
  movie!: MovieModel;
  cast: any

  constructor(private route: ActivatedRoute, private movieService: MoviesService, private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.getParams()
  }

  getParams() {
    this.route.paramMap.subscribe(
      (param) => {
        this.movieId = param.get('id')
        console.log(this.movieId);
        this.getMovie(this.movieId)
        this.getCast(this.movieId)
      }
    )
  }

  getMovie(id: string | null) {
    if (id) {
      this.movieService.movie(id).subscribe(
        (movie) => {
          console.log(movie);
          this.movie = movie
        }
      )
    }
  }

  getCast(id: string | null) {
    if (id) {
      this.movieService.cast(id).subscribe(
        (cast) => {
          console.log(cast);
          this.cast = cast
        }
      )
    }
  }
}
