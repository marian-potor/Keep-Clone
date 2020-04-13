import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../models/note.interface';
import { Event } from '@angular/router';

@Component({
  selector: 'app-note',
  styleUrls: ['../../notes.component.scss'],
  template: 
  `
    <div class="note" (click)="onEdit($event)">
      <div>
        <h3>{{item?.title}}</h3>
      </div>
      <div>
        {{item?.content}}
      </div>
      <div>
        <date-viewer *ngIf="item.date" [date]="item.date" (newDate)="onDateUpdate($event)"></date-viewer>
      </div>
      <button (click)="onDelete($event)">Delete</button>
    </div>
  `
})

export class NoteComponent {

  @Input()
  item: Note;

  @Output()
  edit: EventEmitter<Note> = new EventEmitter<Note>();

  @Output()
  delete: EventEmitter<Note> = new EventEmitter<Note>();

  onEdit(event: any): void {
    event.stopPropagation();
    this.edit.emit(this.item);
  } 

  onDelete(event: any) {
    event.stopPropagation();
    this.delete.emit(this.item);
  }

  onDateUpdate(date: Date) {
    this.item.date = date;
    this.edit.emit(this.item);
  }
  
}