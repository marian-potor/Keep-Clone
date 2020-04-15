import { Component } from '@angular/core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { ButtonTemplate } from '../button-template/button-template';


@Component({
  selector: 'reminder-button',
  styleUrls: ['../button-container.component.scss'],
  templateUrl: '../button-template/button-template.html'
})

export class ReminderButtonComponent extends ButtonTemplate{
  icon = faBell;
  buttonInfo = 'Remind me'
}