import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: "date-viewer",
  styleUrls: ["date-viewer.component.scss"],
  template: `
    <div class="reminder" (click)="updateReminder($event)">
      <span>{{date | date:'LLL dd, h:mm a'}}</span>
    </div>
    <button (click)="removeReminder($event)">X</button>
  `
})

export class DateViewerComponent {
  @Input()
  date: Date;

  @Output()
  newDate: EventEmitter<Date> = new EventEmitter<Date>()

  removeReminder(event: any) {
    event.stopPropagation(); //not working
    this.date = null;
    this.newDate.emit(this.date)
  }

  updateReminder(event: any) {
    event.stopPropagation();
  }
}