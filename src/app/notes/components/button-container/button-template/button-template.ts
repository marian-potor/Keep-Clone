import { Output, EventEmitter } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export abstract class ButtonTemplate {
  icon: IconDefinition;
  buttonInfo: string;
  colorList: string[] = [];

  @Output()
  color: EventEmitter<string> = new EventEmitter<string>();

  updateColor(event: any) {
    event.stopPropagation();
    this.color.emit(event.target.style.backgroundColor);
  }
}