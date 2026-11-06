import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../app/components/user/user';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

//  getContactPersons(): Observable<User> {
//     return this.http.get<User>('');
//   }
  getFromServer(): Observable<any> {
    return this.http.get<any>('https://localhost:7257/WeatherForecast');
  }
}
