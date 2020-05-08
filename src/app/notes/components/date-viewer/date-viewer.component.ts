import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconDefinition, faClock } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: "date-viewer",
  styleUrls: ["date-viewer.component.scss"],
  template: `
    <div class="reminder" (click)="updateReminder($event)">
      <span>
        <fa-icon [icon]="icon"></fa-icon>{{date | date:'LLL dd, h:mm a'}}
      </span>
    </div>
    <button (click)="removeReminder($event)">X</button>
  `
})

export class DateViewerComponent {
  icon: IconDefinition = faClock;

  @Input()
  date: Date;

  @Output()
  newDate: EventEmitter<Date> = new EventEmitter<Date>();

  @Output()
  edit: EventEmitter<boolean> = new EventEmitter<boolean>();

  removeReminder(event: MouseEvent): void {
    event.stopPropagation();
    this.date = null;
    this.newDate.emit(this.date)
  }

  updateReminder(event: MouseEvent): void {
    event.stopPropagation();
    this.edit.emit(true);
  }
}