import { Component, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../../models/note.interface';
import { TextareaDim } from '../../../models/textareaDim.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'note-view',
  styleUrls: ['note-view.component.scss'],
  template: 
  `
    <div class="note-view" (click)="stopEvent($event)" [style.background-color]="detail.color">
      <form #form="ngForm" novalidate>
        <div>
          <textarea 
          name="title"
          [ngModel]="detail?.title"
          placeholder="Title" 
          (input)="textChange($event, form.value)"  
          [style.height.px]="title.elementHeight"></textarea>
        </div>
        <div>
          <textarea 
          name="content"
          [ngModel]="detail?.content"
          placeholder="Take a note..." 
          (input)="textChange($event, form.value)" 
          [style.height.px]="content.elementHeight"></textarea>
        </div>
        <date-viewer *ngIf="detail.date" [date]="detail.date" (edit)="showDateImput()" (newDate)="onDateUpdate($event)"></date-viewer>
        <date-input *ngIf="addEditReminder" [currentDate]="detail.date" (date)="saveTimeDate($event)"></date-input>
      </form>
      <button-container>
        <reminder-button (click)="showDateImput()"></reminder-button>
        <color-button (color)="onColorChange($event)"></color-button>
        <image-button></image-button>
        <print-button (click)="showPrintView()"></print-button>
        <remove-button *ngIf="!newNote" (click)="onDelete($event)"></remove-button>
      </button-container>
    </div>
  `
})

export class NoteViewComponent implements OnDestroy {

  @Input()
  detail: Note;

  //if newNote true a new instance will not be created if all fields are empty and remove button is not available
  //but for existing notes all fields can be edited to be empty
  @Input()
  newNote: boolean; 

  @Output()
  update: EventEmitter<Note> = new EventEmitter<Note>();

  @Output()
  delete: EventEmitter<Note> = new EventEmitter<Note>();

  lineHeight: number = 16;
  title :TextareaDim = {elementHeight:0, newLineMark: []};
  content :TextareaDim = {elementHeight:0, newLineMark: []};
  addEditReminder: boolean = false;
  deleted: boolean = false; //if note is deleted ngOnDestroi does not emit info

  constructor(private router: Router) {
    this.title.elementHeight = this.lineHeight;
    this.content.elementHeight = this.lineHeight;
  }

  ngOnDestroy(): void {
    if (this.deleted) return;
    if(
      this.detail.title.length > 0 ||
      this.detail.content.length > 0 ||
      this.detail.date ||
      !this.newNote
      ) {
        this.update.emit(this.detail);
    }
  }

  textChange(event: any, formValue: Note): void {
    this.detail = Object.assign({}, this.detail, formValue)
    if (event.target.scrollHeight > event.target.clientHeight) {
      this[event.target.name].elementHeight += this.lineHeight;
      this[event.target.name].newLineMark.push(event.target.value.length)
    }
    while (event.target.value.length < this[event.target.name].newLineMark[this[event.target.name].newLineMark.length-1]) {
      this[event.target.name].newLineMark.pop();
      this[event.target.name].elementHeight -= this.lineHeight;
    }
  }

  showDateImput(): void {
    event.stopPropagation();
    this.addEditReminder = true;
  }

  saveTimeDate(newDateTime: Date): void{
    this.detail.date = newDateTime;
    this.addEditReminder = false;
  }

  onDateUpdate(date: Date): void {
    this.detail.date = date;
  }

  onColorChange(color: string){
    this.detail = Object.assign({}, this.detail, {color});
  }

  showPrintView(): void {
    this.router.navigate(['/notes', this.detail.id])
  }

  onDelete(event: MouseEvent): void {
    event.stopPropagation(); 
    this.deleted = true;
    this.delete.emit(this.detail)
  }

  stopEvent(event: MouseEvent): void {
    event.stopPropagation();
    this.addEditReminder = false;
  } //the click event on the parent and it's children closes this section; 
    //the click event on this section is stoped from propagating so this section remains open
}
