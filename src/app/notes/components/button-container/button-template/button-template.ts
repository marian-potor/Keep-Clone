import { Output, EventEmitter, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export abstract class ButtonTemplate {
  icon: IconDefinition;
  buttonInfo: string;
  colorList: string[] = [];
  
  @Input()
  inactiveButton: boolean = false;

  @Output()
  color: EventEmitter<string> = new EventEmitter<string>();

  updateColor(event: any): void {
    event.stopPropagation();
    this.color.emit(event.target.style.backgroundColor);
  }

  stopClick(event: MouseEvent): void {
    if(this.inactiveButton) {
      event.stopPropagation();
    }
  }

}