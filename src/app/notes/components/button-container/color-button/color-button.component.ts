import { Component } from '@angular/core';
import { faPalette, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'color-button',
  styleUrls: ['../button-container.component.scss'],
  templateUrl: '../button-template/button-template.html'
})

export class ColorButtonComponent {
  icon: IconDefinition = faPalette;
  buttonInfo: string = 'Change color';
  colorList: string[] = [
    'rgb(255, 255, 255)',
    'rgb(242, 139, 130)',
    'rgb(251, 188, 4)',
    'rgb(255, 244, 117)',
    'rgb(204, 255, 144)',
    'rgb(167, 255, 235)',
    'rgb(203, 240, 248)',
    'rgb(174, 203, 250)',
    'rgb(215, 174, 251)',
    'rgb(253, 207, 232)',
    'rgb(230, 201, 168)',
    'rgb(232, 234, 237)'
  ];
}