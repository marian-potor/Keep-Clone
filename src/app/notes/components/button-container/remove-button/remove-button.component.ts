import { Component } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'remove-button',
  styleUrls: ['../button-container.component.scss'],
  templateUrl: '../button-template/button-template.html'
})

export class RemoveButtonComponent {
  icon = faTrashAlt;
  buttonInfo: string = 'Delete note'
}