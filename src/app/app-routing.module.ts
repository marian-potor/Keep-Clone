import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  {path:'', redirectTo:'notes', pathMatch: 'full'},
  {path:'**', redirectTo:'notes', pathMatch: 'full'},
  {path:'modal/:prev', component: ModalComponent, outlet: 'modal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
