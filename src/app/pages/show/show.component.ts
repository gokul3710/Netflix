import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from 'src/app/models/movies';
import { TVShowModel } from 'src/app/models/tvshows';
import { MoviesService } from 'src/app/services/movies.service';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {

  showId: string | null = ''
  show!: TVShowModel;
  cast: any

  constructor(private route: ActivatedRoute, private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.getParams()
  }

  getParams() {
    this.route.paramMap.subscribe(
      (param) => {
        this.showId = param.get('id')
        console.log(this.showId);
        this.getShow(this.showId)
        this.getCast(this.showId)
      }
    )
  }

  getShow(id: string | null) {
    if (id) {
      this.seriesService.show(id).subscribe(
        (show) => {
          console.log(show);
          this.show = show
        }
      )
    }
  }

  getCast(id: string | null) {
    if (id) {
      this.seriesService.cast(id).subscribe(
        (cast) => {
          console.log(cast);
          this.cast = cast
        }
      )
    }
  }
}
