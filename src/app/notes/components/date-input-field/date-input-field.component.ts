import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector:'date-input',
  template:`
  <div (click)="stopEvent($event)">
    <input
      #dateTime
      type="datetime-local"
      name="date"
      [value]="currentDate">
    <button (click)="saveReminder(dateTime)">Save</button>
  </div>
  `
})

export class DateInputFieldComponent {

  @Input()
  currentDate: Date;

  @Output()
  date: EventEmitter<string> = new EventEmitter<string>();

  saveReminder(reminder: HTMLInputElement) {
    event.stopPropagation();
    if (reminder.value) {
      this.date.emit(reminder.value);
    }
  }

  stopEvent(event: any) {
    event.stopPropagation();
  }
}
