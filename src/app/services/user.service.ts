import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private searchString: string = ''

  constructor() { }

  setSearch(val: string){
    this.searchString = val
  }

  getSearch(){
    return this.searchString
  }
  
}
