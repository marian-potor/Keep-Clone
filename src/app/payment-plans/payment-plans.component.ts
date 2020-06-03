import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Feature } from '../models/feature.interface';
import { PaymentsService } from '../services/payments.service';

@Component({
  selector: 'app-payment-plans',
  templateUrl: './payment-plans.component.html',
  styleUrls: ['./payment-plans.component.scss']
})
export class PaymentPlansComponent implements OnInit {
  features: Feature[];

  constructor(
    private featuresService: UsersService,
    private payment: PaymentsService,
    ) { }

  ngOnInit(): void {
    this.featuresService.getFeatures()
    .subscribe(data => this.features = data);
  }

  selectPlan(plan: any): void {
    if (plan === 'free') {
      this.payment.newPayment({details: 'Basic plan', amount: 0})
    }
    if (plan === 'premium') {
      this.payment.newPayment({details: 'Premium plan', amount: 20});
    }
  }
}
