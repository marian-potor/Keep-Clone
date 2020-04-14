import { Component } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'remove-button',
  styleUrls: ['../button-container.component.scss'],
  template: `<button><fa-icon [icon]="icon"></fa-icon></button>`
})

export class RemoveButtonComponent {
  icon = faTrashAlt;
}