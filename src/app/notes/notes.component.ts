import { Component, OnInit } from '@angular/core';
// import noteList from './notes-list';
import { Note } from './models/note.interface';
import { NotesService } from './notes.service';

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
  styleUrls: ['./notes.component.scss'],
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
    date: 0
  };

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.getNotes();
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
    this.notesService.getNotes()
    .subscribe((data: Note[]) => this.noteList = data);
  }

  updateNote(note: Note) {
    this.notesService.updateNote(note)
    .subscribe((data: Note) => {
      this.noteList = this.noteList.map((item: Note) => {
        if(item.id === data.id) {
          return item = Object.assign({}, item, data);
        }
        return item;
      });
    })
  }

  createNote(note: Note) {
    this.notesService.createNote(note)
    .subscribe(data => this.noteList.push(data));
  };

  deleteNote(note: Note) {
    this.notesService.removeNote(note.id)
    .subscribe(data => this.noteList = this.noteList.filter((item) => item.id !== note.id));
  };
}
