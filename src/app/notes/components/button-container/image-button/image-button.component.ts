import { Component } from '@angular/core';
import { faImage } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'image-button',
  styleUrls: ['../button-container.component.scss'],
  template: `<button><fa-icon [icon]="icon"></fa-icon></button>`
})

export class ImageButtonComponent {
  icon = faImage;
}