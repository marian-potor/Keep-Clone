import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[card-number]'
})
export class CardNumberDirective {

  @Output()
  filteredCardNumber: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let filteredInput: string = input.value.replace(/\D/g, '');
    if (filteredInput.length > 16) {
      filteredInput = filteredInput.substring(0, 16);
    }
    let numberGroups: string[] = [];
    for (let i:number = 0; i < filteredInput.length; i += 4) {
      numberGroups.push(filteredInput.substring(i, i+4));
    }
    filteredInput = numberGroups.join(' ');
    input.value = filteredInput;
    this.filteredCardNumber.emit(filteredInput);
  }
}