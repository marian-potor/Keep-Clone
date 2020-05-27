import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  currentYear: number = (new Date).getFullYear();
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

  submit(form) {
    console.log(form);
    
  }

}
