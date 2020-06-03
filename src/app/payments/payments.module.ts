import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';
import { FormsModule } from '@angular/forms';
import { CardDetailDirective } from './card-detail.directive';
import { PaymentsResolve } from './payments.resolve';

@NgModule({
  declarations: [
    PaymentsComponent,
    CardDetailDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ PaymentsResolve ]
})
export class PaymentsModule { }
