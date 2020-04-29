import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './users.component';
import { LoginFormComponent } from './login/login-form.component';
import { RegisterFormComponent } from './register/register-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {
    path: 'user',
    children:[
      {path: 'register', component: RegisterFormComponent},
      {path: 'login', component: LoginFormComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'}
    ],
    component: UsersComponent
  }
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
  exports: [
    // UsersComponent
  ],
  providers: []
})
export class UsersModule { }
