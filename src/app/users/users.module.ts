import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './users.component';
import { LoginFormComponent } from './login/login-form.component';
import { RegisterFormComponent } from './register/register-form.component';

@NgModule({
  declarations: [
    UsersComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    UsersComponent
  ],
  providers: []
})
export class UsersModule { }
