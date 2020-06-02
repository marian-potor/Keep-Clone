import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction.interface';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  transaction: Transaction ={
    details: null,
    amount: null,
    cardNumber: null,
    cardName: null,
    expMonth: null,
    expYear: null,
    CCV: null
  }
  currentYear: number = (new Date).getFullYear();
  rotatedCard: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getNumbersArray(lastNum: number, firstNum: number = 1): number[] {
    let numArray: number[] = []
    for (let i=firstNum; i<=lastNum; i++) {
      numArray.push(i);
    }
    return numArray;
  }

  setCardDetail(event: any) {
    this.transaction[event.name] = event.value
  }

  rotateCard(event: HTMLInputElement): void {
    if (event.type === "focus") {
      this.rotatedCard = true;
      return;
    }
    this.rotatedCard = false;
  }

  submit(form) {
    // console.log(this.transaction);
    console.log(form.form.controls);
    
  }

}
