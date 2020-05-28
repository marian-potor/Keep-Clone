import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[CVV]'
})
export class CVVDirective {

  @Output()
  filteredCVV: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let filteredInput: string = input.value.replace(/\D/g, '');
    if (filteredInput.length > 3) {
      filteredInput = filteredInput.substring(0, 3);
    }
    input.value = filteredInput;
    this.filteredCVV.emit(filteredInput);
  }
}