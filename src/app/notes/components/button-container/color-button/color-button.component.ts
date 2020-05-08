import { Component } from '@angular/core';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { ButtonTemplate } from '../button-template/button-template';

@Component({
  selector: 'color-button',
  styleUrls: ['../button-container.component.scss'],
  templateUrl: '../button-template/button-template.html'
})

export class ColorButtonComponent extends ButtonTemplate {

  icon = faPalette;
  buttonInfo = 'Change color';
  colorList = [
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