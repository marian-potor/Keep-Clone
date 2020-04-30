import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { UsersService } from '../users.service';
import { v4 as generateId } from 'uuid';
import { Subject } from 'rxjs';


@Component({
  selector: 'register-form',
  styleUrls: ['../users.component.scss'],
  template: `
    <div class="form-container">
      <form #form="ngForm" (ngSubmit)="onRegister(form.value, form.valid, email.errors?.email?true:false)">
        <div>
          <h2>Register</h2>
          <hr>
        </div>
        <div>
          <input type="text" name="firstName" placeholder="First name" required [(ngModel)]="newUser.firstName">
        </div>
        <div>
          <input type="text" name="lasttName" placeholder="Last name" required [(ngModel)]="newUser.lastName">
        </div>
        <div>
          <input  #email="ngModel" type="email" name="email" placeholder="Email" required [(ngModel)]="newUser.email" email>
        </div>
        <div>
          <input autocomplete="off" type="text" name="username" placeholder="Username" required [(ngModel)]="newUser.username" (input)="userNameInput$.next($event.target.value)" #username="ngModel">
          <p *ngIf="!validUser && username.dirty">Username is not valid</p>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" required [(ngModel)]="newUser.password">
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
        <div *ngIf="inputError">
          All fields are required
        </div>
        <div *ngIf="userDuplicate">
          Username already exists. Please use a different username.
        </div>
        <div *ngIf="invalidEmail">Email is not valid</div>
      </form>
    </div>
  `
})

export class RegisterFormComponent implements OnInit {
  newUser: User = {
    id: '',
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    noteList: []
  }
  userDuplicate: boolean = false;
  inputError: boolean = false;
  invalidEmail: boolean = false;
  userNameInput$ = new Subject<string>();
  validUser: boolean = false;

  constructor(private usersServices: UsersService) {}

  ngOnInit(): void {
    this.newUser.id = generateId();
    this.userNameInput$.subscribe(userName => this.checkUserName(userName))
  }

  
  onRegister(user: User, isValid: boolean, emailNotValid?: boolean): void {
    if (isValid) {
      this.inputError = false;
      this.invalidEmail = false;
      this.userDuplicate = false;
      this.usersServices.checkUserName(this.newUser.username)
      .subscribe(data => {
        if (data.length) {
          this.userDuplicate = true;
          this.newUser.id = generateId();
          return;
        }
        this.usersServices.registerUser(this.newUser)
        .subscribe(data => {
            this.usersServices.setSessionUser(data);
          });
      })
      return;
      }
    this.invalidEmail = emailNotValid;
    this.inputError = true;
  }

  checkUserName(input: string): void {
    this.usersServices.checkUserName(input)
    .subscribe(data => this.validUser = !!data.length)
  }
}