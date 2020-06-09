import { Directive, HostListener, Output, EventEmitter, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, FormControl, ControlContainer } from '@angular/forms';

@Directive({
  selector: '[card-details]',
  providers: [{provide: NG_VALIDATORS, useExisting: CardDetailDirective, multi: true}]
})
export class CardDetailDirective implements Validator{
  filtered: string;
  requiredLength: number;

  constructor(private formControl: ControlContainer) {}

  @Output()
  filteredInput: EventEmitter<{value: string, name: string}> = new EventEmitter<{value: string, name: string}>();

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // console.log(this.control.control.get(this.name))
    const input = event.target as HTMLInputElement;
    this.filtered = input.value.replace(/\D/g, '');
    if (input.name === 'cardNumber') {
      this.requiredLength = 16;
      if (this.filtered.length > this.requiredLength) {
        this.filtered = this.filtered.substring(0, this.requiredLength);
      }
      let numberGroups: string[] = [];
      for (let i:number = 0; i < this.filtered.length; i += 4) {
        numberGroups.push(this.filtered.substring(i, i+4));
      }
      this.filtered = numberGroups.join('-');
      this.requiredLength = 19;
    }
    if (input.name === 'CCV') {
      this.requiredLength = 3;
      if (this.filtered.length > this.requiredLength) {
        this.filtered = this.filtered.substring(0, this.requiredLength);
      }
    }
    this.formControl.control.get(input.name).setValue(this.filtered);
    this.filteredInput.emit({value: this.filtered, name: input.name});

  }

  validate(): {[key: string]: boolean} | null {
    if (this.filtered && this.filtered.length === this.requiredLength ) {
      return null;
    }   
    return {validLength: false};
  }
}