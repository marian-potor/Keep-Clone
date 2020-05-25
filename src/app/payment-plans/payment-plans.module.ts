import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentPlansComponent } from './payment-plans.component';
import { TextTransformPipe } from './text-transform.pipe';
import { ContentProcessingComponent } from './content-processing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    PaymentPlansComponent,
    TextTransformPipe,
    ContentProcessingComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class PaymentPlansModule { }
