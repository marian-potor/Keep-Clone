import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';
import { Feature } from '../models/feature.interface';
import { Credentials } from '../models/userCredentials.interface';
import { AppStateService } from './app-state.service';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})

export class UsersService {
  usersUrl: string = 'http://localhost:3000/users';
  featuresUrl: string = 'http://localhost:3000/features';

  constructor(
    private http: HttpClient,
    private state: AppStateService,
    private router: Router
    ) {}

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

  setSessionUser(user: User) {
    const minifiedUser: Credentials = {username: user.username, password: user.password};
    localStorage.setItem('sessionUser', JSON.stringify(minifiedUser));
    this.state.setUser(user);
    this.router.navigate(['notes']);
  }

  getFeatures() {
    return this.http.get<Feature[]>(`${this.featuresUrl}`)
  }
}