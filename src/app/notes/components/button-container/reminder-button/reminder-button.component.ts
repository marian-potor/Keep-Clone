import { Component } from '@angular/core';
import { faBell } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'reminder-button',
  styleUrls: ['../button-container.component.scss'],
  template: `<button><fa-icon [icon]="icon"></fa-icon></button>`
})

export class ReminderButtonComponent {
  icon = faBell;
}