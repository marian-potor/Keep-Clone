import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Note } from './models/note.interface';


const NOTES_URL = 'http://localhost:3000/noteList';

@Injectable(
//   {
//   providedIn: 'root',  //injects service at root level; any class has acces to it in the whole app
//  }
 )
export class NotesService {
  notesUrl: string = 'http://localhost:3000/noteList';

  constructor(private http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.notesUrl);
  }

  getNote(id: number): Observable<Note> {
    return this.http.get<Note>(`${this.notesUrl}/${id}`);
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(`${this.notesUrl}`, note);
  }

  updateNote(note: Note): Observable<Note> {
    return this.http.put<Note>(`${this.notesUrl}/${note.id}`, note);
  }

  removeNote(id: number): Observable<Note> {
    return this.http.delete<Note>(`${this.notesUrl}/${id}`);
  }
}
