import { Component, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../models/note.interface';
import { TextareaDim } from '../../models/textareaDim.interface';

@Component({
  selector: 'note-view',
  styleUrls: ['note-view.component.scss'],
  template: 
  `
    <div class="note-view" (click)="stopEvent($event)">
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
        <date-viewer *ngIf="detail.date" [date]="detail.date"></date-viewer>
        <div *ngIf="addEditReminder">
          <input
            #dateTime
            type="datetime-local"
            name="date"
            [ngModel]="detail.date">
          <button (click)="saveTimeDate(dateTime)">Save</button>
        </div>
      </form>
      <reminder-button (click)="showDateImput()"></reminder-button>
    </div>
  `
})

export class NoteViewComponent implements OnDestroy {

  @Input()
  detail: Note;

  @Output()
  update: EventEmitter<Note> = new EventEmitter<Note>();

  lineHeight: number = 16;
  title :TextareaDim = {elementHeight:0, newLineMark: []};
  content :TextareaDim = {elementHeight:0, newLineMark: []};
  addEditReminder: boolean = false;

  constructor() {
    this.title.elementHeight = this.lineHeight;
    this.content.elementHeight = this.lineHeight;
  }

  ngOnDestroy() {
    if(
      this.detail.title.length > 0 ||
      this.detail.content.length > 0 ||
      this.detail.date
      ) {
      this.update.emit(this.detail);
    }
  }

  textChange(event: any, formValue: Note) {
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

  showDateImput() {
    this.addEditReminder = true;
  }

  saveTimeDate(newTime){
    this.detail.date = newTime.value;
    this.addEditReminder = false;
  }

  stopEvent(event: any) {
    event.stopPropagation();
  } //the click event on the parent and it's children closes this section; 
    //the click event on this section is stoped from propagating so this section remains open
}
