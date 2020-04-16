import { Component, OnInit } from '@angular/core';
import { v4 as generateId } from 'uuid';
import { Note } from './models/note.interface';
import { NotesService } from './notes.service';

const notesURL: string = 'http://localhost:3000/noteList';

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
    id: '',
    title: '',
    content: '',
    date: null,
    color: 'rgb(255, 255, 255)'
  };

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.getNotes();
  }

   //when clicking on it the new note div is hidden and the note-view is rendered
  startNewNote(): void {
    const id: string = generateId();
    this.newNote = Object.assign({}, this.newNote, {id: id, date: null});
    this.newNoteTrigger = 'none';
    event.stopPropagation();
  }

  //the click event on this section closes the note-view
  closeNoteWiew(): void {
    this.newNoteTrigger = 'block';
    this.editNote = false;
  }

  onEditNote(note: Note): void {
    this.currentNote = note;
    this.editNote = true;
    this.updateNote(note)
  }

  onDeleteNote(note: Note): void {
    this.editNote = false;
    this.deleteNote(note);
  }

  getNotes(): void {
    this.notesService.getNotes()
    .subscribe((data: Note[]) => this.noteList = data);
  }

  updateNote(note: Note): void {
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

  createNote(note: Note): void {
    this.notesService.createNote(note)
    .subscribe(data => this.noteList.push(data));
  };

  deleteNote(note: Note): void {
    this.notesService.removeNote(note.id)
    .subscribe(data => this.noteList = this.noteList.filter((item) => item.id !== note.id));
  };
}
