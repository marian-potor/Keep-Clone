import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../models/note.interface';

@Component({
  selector: 'app-note',
  styleUrls: ['../notes.component.scss'],
  template: 
  `
    <div class="note" (click)="editNote($event)">
      <div>
        <h3>{{item.title}}</h3>
      </div>
      <div>
        {{item.content}}
      </div>
    </div>
  `
})

export class NoteComponent {

  @Input()
  item: Note;

  @Output()
  edit: EventEmitter<Note> = new EventEmitter<Note>();

  editNote(event: any): void {
    event.stopPropagation();
    this.edit.emit(this.item);
  }
  
}