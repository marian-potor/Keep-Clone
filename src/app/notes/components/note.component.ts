import { Component, Input } from '@angular/core';
import { Note } from '../models/note.interface';

@Component({
  selector: 'app-note',
  styleUrls: ['../notes.component.scss'],
  template: 
  `
    <div class="note">
      {{item.content}}
    </div>
  `
})

export class NoteComponent {

  @Input()
  item: Note;
  
}