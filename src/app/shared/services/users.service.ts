import { Injectable } from '@angular/core';
import { Iuser } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users : Iuser[]= [
    {
      userName : "Ram",
      id : 1
    }, 
     {
      userName : "Laxman",
      id : 2
    }, 
     {
      userName : "Hanuman",
      id : 3
    },
  ]
  constructor() { }
  getAllUsers(){
    return this.users;
  }
  getUser(id:number){
    return this.users.find(user =>{
     return user.id === id
    })
  }
}
