import { Payment } from './payment.interface';

export interface Transaction extends Payment {
  cardNumber: string,
  cardName: string,
  expMonth: number,
  expYear: number,
  CCV: string
}