import { Component, OnInit } from '@angular/core';
// import noteList from './notes-list';
import { Note } from './models/note.interface';
import { isNgTemplate } from '@angular/compiler';
// import { NotesService } from './notes.service';

const notesURL: string = 'http://localhost:3000/noteList';
const someNote: Note =   {
  id: 2,
  title: 'someote',
  content: 'Second ',
  date: 3
}

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  noteList: Note[];
  newNoteTrigger: string = 'block';
  editNote: boolean = false;
  currentNote: Note;
  newNote: Note = {    
    id: 0,
    title: '',
    content: '',
    date: 0}

  ngOnInit() {
    // this.noteList = noteList;
    this.getNotes();

    //service not working
    // this.notesService
    // .getNotes()
    // .subscribe((data: Note[]) => console.log(data));
  }
  startNewNote(): void {
    const id: number = this.noteList.reduce((highVal, el) => (el.id>highVal?el.id:highVal), 0);
    this.newNote = Object.assign({}, this.newNote, {id: id+1});
    this.newNoteTrigger = 'none';
    event.stopPropagation();
  } //when clicking on it the new note div is hidden and the note-view is rendered

  closeNoteWiew(): void {
    this.newNoteTrigger = 'block';
    this.editNote = false;
  }//the click event on this section closes the note-view

  onEditNote(note: Note) {
    this.currentNote = note;
    this.editNote = true;
  }

  getNotes(): void {
    fetch(notesURL)
    .then(data => data.json())
    .then(data => this.noteList = data);
  }

  updateNote(note: Note) {
    fetch(`${notesURL}/${note.id}`, {
      method: 'PUT',
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json" // <--- don't forget this!
      }
    })
    .then(() => {
      this.noteList = this.noteList.map((item: Note) => {
        if(item.id === note.id) {
          return item = Object.assign({}, item, note);
        }
        return item;
      });
    });
  };

  createNote(note: Note) {
    fetch(`${notesURL}`, {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json" // <--- don't forget this!
      }
    })
    .then(() => this.noteList.push(note));
  };

  deleteNote(note: Note) {
    fetch(`${notesURL}/${note.id}`, {
      method: 'DELETE',
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json" // <--- don't forget this!
      }
    })
    .then(() => this.noteList = this.noteList.filter((item) => item.id !== note.id));
  };
}
