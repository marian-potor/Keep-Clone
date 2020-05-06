import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './users.component';
import { LoginFormComponent } from './login/login-form.component';
import { RegisterFormComponent } from './register/register-form.component';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthGuard } from '../auth/not-auth-guard.service';


const routes: Routes =[
  {path: 'register', canActivate: [NotAuthGuard], component: UsersComponent},
  {path: 'login', canActivate: [NotAuthGuard], component: UsersComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    UsersComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: []
})
export class UsersModule { }
