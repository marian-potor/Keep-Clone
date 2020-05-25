import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Feature } from '../models/feature.interface';

@Component({
  selector: 'app-payment-plans',
  templateUrl: './payment-plans.component.html',
  styleUrls: ['./payment-plans.component.scss']
})
export class PaymentPlansComponent implements OnInit {
  features: Feature[];

  constructor(private featuresService: UsersService) { }

  ngOnInit(): void {
    this.featuresService.getFeatures()
    .subscribe(data => this.features = data);
  }

}
