import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../../models/note.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  styleUrls: ['./note.component.scss'],
  templateUrl: './note.component.html'
})

export class NoteComponent {

  @Input()
  item: Note;

  @Output()
  edit: EventEmitter<Note> = new EventEmitter<Note>(); //for opening note in note-view

  @Output()
  update: EventEmitter<Note> = new EventEmitter<Note>();

  @Output()
  delete: EventEmitter<Note> = new EventEmitter<Note>();

  addEditReminder: boolean = false;

  constructor(private router: Router) {}

  onEdit(event: MouseEvent): void {
    event.stopPropagation();
    if (this.addEditReminder) {
      this.addEditReminder = false;
      return;
    }
    this.edit.emit(this.item);
  } 

  onDelete(event: MouseEvent): void {
    event.stopPropagation();
    this.delete.emit(this.item);
  }

  onColorChange(color: string){    
    this.item = Object.assign({}, this.item, {color});
    this.update.emit(this.item);
  }

  onDateUpdate(date: Date): void {
    this.item = Object.assign({}, this.item, {date});
    this.update.emit(this.item);
  }

  saveTimeDate(newDateTime: Date): void{
    this.item.date = newDateTime;
    this.addEditReminder = false;
    this.update.emit(this.item);
  }

  showDateImput(): void {
    event.stopPropagation();
    this.addEditReminder = true;
  }

  showPrintView(event: MouseEvent): void {
    event.stopPropagation();
    this.router.navigate(['/notes', this.item.id])
  }
}