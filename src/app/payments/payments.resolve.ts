import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Payment } from '../models/payment.interface';
import { PaymentsService } from '../services/payments.service';
import { take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class PaymentsResolve implements Resolve<Payment> {
  constructor(
    private paymentServ: PaymentsService,
    private router: Router) {}

  resolve(): Payment {
    if (this.paymentServ.getPaymentDetails()) {
      return this.paymentServ.getPaymentDetails();
    }
    this.router.navigate(['home'])
  }
}