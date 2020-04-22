import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable()

export class UsersService {
  usersUrl: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  logIn(user: User): Observable<any> {
    return this.http.get(`${this.usersUrl}?username=${user.username}&password=${user.password}`);
  }

}