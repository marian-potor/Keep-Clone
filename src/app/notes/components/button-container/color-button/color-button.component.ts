import { Component } from '@angular/core';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'color-button',
  styleUrls: ['../button-container.component.scss'],
  template: `<button><fa-icon [icon]="icon"></fa-icon></button>`
})

export class ColorButtonComponent {
  icon = faPalette;
}