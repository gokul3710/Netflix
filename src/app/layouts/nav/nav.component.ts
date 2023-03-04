import { Component, ElementRef, HostListener, Renderer2, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  @ViewChild('formInput', {static:false}) formInput : ElementRef<HTMLInputElement> | null;
  @ViewChild('searchForm', {static:false}) form : ElementRef<HTMLInputElement> | null;
  isScrolled = false;
  formActive = false;

  constructor(private renderer: Renderer2,private router: Router, private userService: UserService){
    this.formInput = null;
    this.form = null
  }
  
  ngOnInit(): void {  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if(window.innerWidth > 599)
    this.isScrolled = window.pageYOffset > 0;
  }

  formChange(){
    this.formActive = !this.formActive;

    if (this.formInput !== null) {
      this.formInput.nativeElement.style.width = '15rem';
      this.form!.nativeElement.style.opacity = "1"
    }    
  }

  handleSearch(data: NgForm, input: HTMLInputElement){
    console.log(input.value);
    this.userService.search = input.value
    this.router.navigateByUrl('/search')
  }
}
