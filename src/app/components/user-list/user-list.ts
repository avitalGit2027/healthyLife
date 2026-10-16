import { Component } from '@angular/core';
import { User } from '../user/user';
import { SingleUser } from '../../interfaces/Single-User';



@Component({
  imports: [User],
  selector: 'app-user-list',
  styleUrl: './user-list.css',
  templateUrl: './user-list.html',
})
export class UserList {
  usersList:SingleUser[]=[
    {UserName:"Chani",phone:"0534144112",email:"54564646",status:true,birthDate:new Date()},
    {UserName:"Chani",phone:"0534144112",email:"54564646",status:true,birthDate:new Date()},
    {UserName:"Chani",phone:"0534144112",email:"54564646",status:true,birthDate:new Date()}
//בדיקה
]
}
