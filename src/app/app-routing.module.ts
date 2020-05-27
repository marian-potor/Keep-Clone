import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page.component';
import { PaymentPlansComponent } from './payment-plans/payment-plans.component';
import { PaymentsComponent } from './payments/payments.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'home', component: HomePageComponent},
  {path:'payment-plans', component: PaymentPlansComponent},
  {path:'payments', component: PaymentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
