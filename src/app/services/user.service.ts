import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private searchString: string = ''

  constructor() { }

  set search(val: string){
    this.searchString = val
  }

  get search(){
    return this.searchString
  }
  
}
