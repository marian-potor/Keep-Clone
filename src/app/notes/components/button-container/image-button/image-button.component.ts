import { Component } from '@angular/core';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { ButtonTemplate } from '../button-template/button-template';

@Component({
  selector: 'image-button',
  styleUrls: ['../button-container.component.scss'],
  templateUrl: '../button-template/button-template.html'
})

export class ImageButtonComponent extends ButtonTemplate {
  icon = faImage;
  buttonInfo = 'Add image'
}