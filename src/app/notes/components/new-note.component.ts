import { Component, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../models/note.interface';
import { TextareaDim } from '../models/textareaDim.interface';

@Component({
  selector: 'note-view',
  styleUrls: ['../notes.component.scss'],
  template: 
  `
    <div class="note-view" (click)="stopEvent($event)">
      <form #form="ngForm" novalidate>
        <textarea 
          name="title"
          [ngModel]="detail?.title"
          placeholder="Title" 
          (input)="textChange($event, form.value)"  
          [style.height.px]="title.elementHeight"></textarea>
        <textarea 
          name="content"
          [ngModel]="detail?.content"
          placeholder="Take a note..." 
          (input)="textChange($event, form.value)" 
          [style.height.px]="content.elementHeight"></textarea>
        <div class="reminder">
          <span>{{detail?.date | date:'LLL dd, h:mm a'}}</span>
          <button>X</button>
        </div>
        <input 
          type="datetime-local"
          name="date"
          [ngModel]="detail?.date">
      </form>
    </div>
  `
})

export class NewNoteComponent implements OnDestroy {

  @Input()
  detail: Note;

  @Output()
  update: EventEmitter<Note> = new EventEmitter<Note>();

  lineHeight: number = 16;
  title :TextareaDim = {elementHeight:0, newLineMark: []};
  content :TextareaDim = {elementHeight:0, newLineMark: []};
  date: Date;
  currentNote: Note;

  constructor() {
    this.title.elementHeight = this.lineHeight;
    this.content.elementHeight = this.lineHeight;
  }

  ngOnDestroy() {
    // console.log(new Date(this.detail.date).toLocaleString());
    this.update.emit(this.detail);
    // console.log(this.detail);
    // this.handleSubmit(form.value)
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
  stopEvent(event: any) {
    event.stopPropagation();
  } //the click event on the parent and it's children closes this section; 
    //the click event on this section is stoped from propagating so this section remains open
}
