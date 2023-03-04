import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-single',
  templateUrl: './card-single.component.html',
  styleUrls: ['./card-single.component.css']
})
export class CardSingleComponent {

  @Input() movie: any
  link: string = "https://image.tmdb.org/t/p/w500/"

  constructor(){}

  ngOnInit(): void {
    this.link = this.link + this.movie["backdrop_path"]
  }

  getMatchPercentage(val: number){
    return Math.floor(val*10)
  }


}
