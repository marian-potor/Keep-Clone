import { Component, OnInit } from '@angular/core';
import noteList from './notes-list';
import { Note } from './models/note.interface';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  noteList: Note[];
  constructor() { }

  ngOnInit(): void {
    this.noteList = noteList;
  }

}
