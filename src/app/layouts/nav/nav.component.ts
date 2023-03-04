import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
  isScrolled = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if(window.innerWidth > 599)
    this.isScrolled = window.pageYOffset > 0;
  }

}
