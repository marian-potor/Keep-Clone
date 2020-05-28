import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';
import { FormsModule } from '@angular/forms';
import { CardNumberDirective } from './card-number.directive';
import { CVVDirective } from './CVV.directive';

@NgModule({
  declarations: [
    PaymentsComponent,
    CardNumberDirective,
    CVVDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PaymentsModule { }
