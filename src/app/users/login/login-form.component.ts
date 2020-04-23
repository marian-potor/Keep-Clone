import { Component, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'login-form',
  styleUrls: ['../users.component.scss'],
  template: `
    <div class="form-container">
      <form #form="ngForm" (ngSubmit)="onLogin(form.value, form.valid)">
        <div>
          <h2>Login</h2>
          <hr>
        </div>
        <div>
          <input type="text" name="username" placeholder="Username" required ngModel>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" required ngModel>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <div *ngIf="inputError">
          Username and password are required
        </div>
        <div *ngIf="logInError">
          Username or Password are incorect
        </div>
      </form>
    </div>
  `
})

export class LoginFormComponent {
  logInError: boolean = false;
  inputError: boolean = false;

  @Output()
  logedInUser: EventEmitter<User> = new EventEmitter<User>()

  constructor(private usersServices: UsersService) {}
  
  onLogin(user: User, isValid: boolean): void {
    if (isValid) {
      this.inputError = false;
      this.usersServices.logIn(user)
      .subscribe(data => {
        if (data.length) {
          this.logInError = false;
          this.logedInUser.emit(data[0])
          return;
        }
        this.logInError = true;
      });
      return;
    }
    this.inputError = true;
    this.logInError = false;
  }
}