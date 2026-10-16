import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './components/user/user';
import { UserList } from './components/user-list/user-list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,User,UserList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('healthyLife');

}
