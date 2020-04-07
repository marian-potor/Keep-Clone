import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/operator/map';
import { Note } from './models/note.interface';

const NOTES_URL = 'http://localhost:3000/noteList';

@Injectable()
export class NotesService {
  constructor(private http: HttpClient) {
  }
  getNotes() {
    return this.http
    .get(NOTES_URL)
  }
}
