import { Component } from '@angular/core';
import { faImage } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'image-button',
  styleUrls: ['../button-container.component.scss'],
  templateUrl: '../button-template/button-template.html'
})

export class ImageButtonComponent {
  icon = faImage;
  buttonInfo: string = 'Add image'
}