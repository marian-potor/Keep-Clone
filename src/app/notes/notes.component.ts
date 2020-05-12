import { Component } from '@angular/core';
import { v4 as generateId } from 'uuid';
import { Note } from '../models/note.interface';
import { User } from '../models/user.interface';
import { UsersService } from '../users/users.service';
import { AppStateService } from '../app-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent {

  user: User;
  newNoteTrigger: string = 'block';
  newNote: Note = {    
    id: '',
    title: '',
    content: '',
    date: null,
    color: 'rgb(255, 255, 255)'
  };

  constructor(
    private userService: UsersService,
    private state: AppStateService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.state.getUser()
    .subscribe(data => this.user = Object.assign({}, data));
    this.state.getParam()
    .subscribe(data => {
      if (data === this.router.url){
        console.log('Modal was closed')
      }
    });
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
  }

  createNote(note: Note): void {
    this.user.noteList.push(note)
    this.userService.updateUser(this.user)
    .subscribe((data: User) => this.state.setUser(data));
  };
}
