import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';
import { FormsModule } from '@angular/forms';
import { CardDetailDirective } from './card-detail.directive';

@NgModule({
  declarations: [
    PaymentsComponent,
    CardDetailDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PaymentsModule { }
