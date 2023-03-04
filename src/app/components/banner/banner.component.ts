import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() movie: any
  link: string = "https://image.tmdb.org/t/p/original/"

  constructor(){}

  ngOnInit(): void {
    this.link = this.link + this.movie["backdrop_path"]
  }

}
