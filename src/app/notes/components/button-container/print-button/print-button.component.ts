import { Component } from '@angular/core';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { ButtonTemplate } from '../button-template/button-template';

@Component({
  selector: 'print-button',
  styleUrls: ['../button-container.component.scss'],
  templateUrl: '../button-template/button-template.html'
})

export class PrintButtonComponent extends ButtonTemplate {
  icon = faPrint;
  buttonInfo = 'Print'
}