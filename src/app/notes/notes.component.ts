import { Component, Input } from '@angular/core';
import { v4 as generateId } from 'uuid';
import { Note } from '../models/note.interface';
import { User } from '../models/user.interface';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent {

  @Input()
  user: User;

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

  constructor(private notesService: UsersService) {}

  // ngOnInit(): void {
  //   this.getNotes();
  // }

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

  // getNotes(): void {
  //   this.notesService.getNotes()
  //   .subscribe((data: Note[]) => this.user.noteList = data);
  // }

  updateNote(note: Note): void {
    this.user.noteList = this.user.noteList.map((item: Note) => {
      if(item.id === note.id) {
        return item = Object.assign({}, item, note);
      }
      return item;
    });
    this.notesService.updateUser(this.user)
    .subscribe((data: User) => console.log(data))
  }

  createNote(note: Note): void {
    this.user.noteList.push(note)
    this.notesService.updateUser(this.user)
    .subscribe((data: User) => console.log(data));
  };

  deleteNote(note: Note): void {
    this.user.noteList = this.user.noteList.filter((item) => item.id !== note.id)
    this.notesService.updateUser(this.user)
    .subscribe(data => console.log(data));
  };
}
