import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../models/note.interface';

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
        <date-viewer *ngIf="item.date" [date]="item.date" (edit)="showDateImput()" (newDate)="onDateUpdate($event)"></date-viewer>
      </div>
      <button-container>
        <reminder-button (click)="showDateImput()"></reminder-button>
        <color-button></color-button>
        <image-button></image-button>
        <remove-button (click)="onDelete($event)"></remove-button>
      </button-container>
      <date-input *ngIf="addEditReminder" [currentDate]="item.date" (date)="saveTimeDate($event)"></date-input>
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

  addEditReminder: boolean = false;

  onEdit(event: any): void {
    event.stopPropagation();
    if (this.addEditReminder === true) {
      this.addEditReminder = false;
      return;
    }
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

  saveTimeDate(newDateTime: Date){
    this.item.date = newDateTime;
    this.addEditReminder = false;
  }

  showDateImput() {
    event.stopPropagation();
    this.addEditReminder = true;
  }
  
}