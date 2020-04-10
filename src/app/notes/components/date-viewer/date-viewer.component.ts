import { Component, Input } from '@angular/core';

@Component({
  selector: "date-viewer",
  styleUrls: ["date-viewer.component.scss"],
  template: `
    <div class="reminder">
      <span>{{date | date:'LLL dd, h:mm a'}}</span>
      <button>X</button>
    </div>
  `
})

export class DateViewerComponent {
  @Input()
  date: number;
}