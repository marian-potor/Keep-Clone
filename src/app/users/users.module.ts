import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './users.component';
import { LoginFormComponent } from './login/login-form.component';
import { UsersService } from './users.service';



@NgModule({
  declarations: [
    UsersComponent,
    LoginFormComponent  
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    UsersComponent
  ],
  providers: [UsersService]
})
export class UsersModule { }
