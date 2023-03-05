import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { userModel } from 'src/app/models/user';
import { Router } from '@angular/router';
NgForm
UserService


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: userModel = {
    email: '',
    password: ''
  }

  constructor(private userService: UserService, private router: Router){}

  handleLogin(data: NgForm){
    let logged = this.userService.login(this.user)
    if(logged){
      this.router.navigateByUrl('/')
    }
  }

}
