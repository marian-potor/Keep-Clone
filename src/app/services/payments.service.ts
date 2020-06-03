import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../models/payment.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  private payment: Payment | null;

  constructor(private router: Router) {}

  newPayment(payment: Payment): void {
    if (payment === null) {
      this.payment = null;
      return;
    }
    this.payment = {...payment};
    this.router.navigate(['payments'])
  }

  getPaymentDetails(): Payment {
    return this.payment;
  }

}