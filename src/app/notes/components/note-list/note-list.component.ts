import { Component } from '@angular/core';
import { Note } from '../../../models/note.interface';
import { User } from '../../../models/user.interface';
import { UsersService } from '../../../services/users.service';
import { AppStateService } from '../../../services/app-state.service';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['../.././notes.component.scss'],
})
export class NoteListComponent {

  user: User;
  editNote: boolean = false;
  currentNote: Note;

  constructor(
    private userService: UsersService,
    private state: AppStateService
    ) {}

  ngOnInit(): void {
    this.state.getUser()
    .subscribe(data => this.user = Object.assign({}, data));
  }

  closeNoteWiew(event: MouseEvent): void {
    event.stopPropagation();
    this.editNote = false;
  }

  onEditNote(note: Note): void {
    this.currentNote = note;
    this.editNote = true;
  }

  onDeleteNote(note: Note): void {
    this.editNote = false;
    this.deleteNote(note);
  }

  updateNote(note: Note): void {
    this.user.noteList = this.user.noteList.map((item: Note) => {
      if(item.id === note.id) {
        return item = Object.assign({}, item, note);
      }
      return item;
    });
    this.userService.updateUser(this.user)
    .subscribe((data: User): void => this.state.setUser(data))
  }

  deleteNote(note: Note): void {
    this.user.noteList = this.user.noteList.filter((item) => item.id !== note.id)
    this.userService.updateUser(this.user)
    .subscribe((data): void => this.state.setUser(data));
  };
}
