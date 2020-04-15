import { Component } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { ButtonTemplate } from '../button-template/button-template';

@Component({
  selector: 'remove-button',
  styleUrls: ['../button-container.component.scss'],
  templateUrl: '../button-template/button-template.html'
})

export class RemoveButtonComponent extends ButtonTemplate {
  icon = faTrashAlt;
  buttonInfo = 'Delete note'
}