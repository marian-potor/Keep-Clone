import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from './models/user.interface';
import { Note } from './models/note.interface';
import { pluck, filter, find } from 'rxjs/operators';

const emptyUser: User =
{
  username: '',
  password: '',
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  noteList: []
} 

@Injectable({providedIn: 'root'})

export class AppStateService {
  private subject = new BehaviorSubject<User>(emptyUser);
  private user = this.subject.asObservable();

  get value() {
    return this.subject.getValue();
  }

  setUser(user: User): void {
    this.subject.next(user);
  }

  getUser(): Observable<User> {
    return this.user
  }

  getNote(id: string): Observable<Note[]> {
    // const notes = this.value.noteList.find(note => note.id === id);
    // console.log(this.value);
    // return of(notes);
    return this.user.pipe(
      pluck('noteList')
      // map(note => note)
      // find(note => note.noteList.id === id)
    )
  }
  
  removeUser(): void {
    this.subject.next(emptyUser);
  }

  userOnStart(): boolean {
    const user: string = localStorage.getItem('sessionUser');
    if (user) return true;
    return false;
  }
}