import { Component, Input } from '@angular/core';
import { SingleUser } from '../../interfaces/Single-User';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  @Input() user:SingleUser|undefined

}
