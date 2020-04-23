import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';
import { Credentials } from '../models/userCredentials.interface';

@Injectable()

export class UsersService {
  usersUrl: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  logIn(user: Credentials): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}?username=${user.username}&password=${user.password}`);
  }

  checkUserName(user: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}?username=${user}`);
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.usersUrl}`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.usersUrl}/${user.id}`, user)
  }

}