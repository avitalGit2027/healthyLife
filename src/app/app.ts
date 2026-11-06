import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './components/user/user';
import { UserList } from './components/user-list/user-list';
import { HttpService } from '../Services/http-service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,User,UserList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('healthyLife');
    constructor(private http:HttpService){}

    contact=signal<any[]>([]);

    ngOnInit(){
     this.getFromServer()
    }

   getFromServer() {
     this.http.getFromServer().subscribe((data) => {
      this.contact.set(data);
      this.contact();
      console.log(data)
      
      })
     
      
    }
  }   
    

  


