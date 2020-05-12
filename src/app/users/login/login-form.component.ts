import { Component } from '@angular/core';
import { Credentials } from 'src/app/models/userCredentials.interface';
import { UsersService } from '../users.service';
import { IconDefinition, faUser, faKey } from '@fortawesome/free-solid-svg-icons';

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
          <fa-icon [icon]="userIcon"></fa-icon>
          <input type="text" name="username" placeholder="Username" required ngModel>
        </div>
        <div>
          <fa-icon [icon]="passwordIcon"></fa-icon>
          <input type="password" name="password" placeholder="Password" required ngModel>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <div *ngIf="inputError" class="input-error">
          Username and password are required
        </div>
        <div *ngIf="logInError" class="input-error">
          Username or Password are incorect
        </div>
      </form>
    </div>
  `
})

export class LoginFormComponent {
  logInError: boolean = false;
  inputError: boolean = false;
  userIcon: IconDefinition = faUser;
  passwordIcon: IconDefinition = faKey;

  constructor(private usersServices: UsersService) {}
  
  onLogin(user: Credentials, isValid: boolean): void {
    if (isValid) {
      this.inputError = false;
      this.usersServices.logIn(user)
      .subscribe(data => {
        if (data.length) {
          this.logInError = false;
          this.usersServices.setSessionUser(data[0]);
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