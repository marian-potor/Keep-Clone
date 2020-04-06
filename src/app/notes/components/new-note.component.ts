import { Component } from '@angular/core';

interface teaxtareaDim {
  elementHeight: number,
  newLineMark: number[]
}

@Component({
  selector: 'note-view',
  styleUrls: ['../notes.component.scss'],
  template: 
  `
    <div class="note-view">
      <textarea 
        name="title"
        [innerHTML]="text"
        placeholder="Title" 
        (input)="textChange($event)" 
        [style.height.px]="title.elementHeight">
      </textarea>
      <textarea 
        name="note"
        [innerHTML]="text"
        placeholder="Take a note..." 
        (input)="textChange($event)" 
        [style.height.px]="note.elementHeight">
      </textarea>
    </div>
  `
})

export class NewNoteComponent {
  text: string
  lineHeight: number = 16;
  title :teaxtareaDim = {elementHeight:0, newLineMark: []};
  note :teaxtareaDim = {elementHeight:0, newLineMark: []};

  constructor() {
    this.title.elementHeight = this.lineHeight;
    this.note.elementHeight = this.lineHeight;
  }
  textChange(event: any) {
    if (event.target.scrollHeight > event.target.clientHeight) {
      this[event.target.name].elementHeight += this.lineHeight;
      this[event.target.name].newLineMark.push(event.target.value.length)
    }
    while (event.target.value.length < this[event.target.name].newLineMark[this[event.target.name].newLineMark.length-1]) {
      this[event.target.name].newLineMark.pop();
      this[event.target.name].elementHeight -= this.lineHeight;
    }
  }
}