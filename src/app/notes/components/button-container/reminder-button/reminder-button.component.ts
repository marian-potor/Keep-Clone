import { Component } from '@angular/core';
import { faBell } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'reminder-button',
  styleUrls: ['../button-container.component.scss'],
  templateUrl: '../button-template/button-template.html'
})

export class ReminderButtonComponent {
  icon = faBell;
  buttonInfo: string = 'Remind me'
}