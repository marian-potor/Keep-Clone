import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ImageButtonComponent } from '../notes/components/button-container/image-button/image-button.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent  
  ],
  entryComponents: [
    ImageButtonComponent
  ]
})
export class ModalModule { }
