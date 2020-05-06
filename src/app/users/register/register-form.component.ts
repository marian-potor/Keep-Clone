import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { UsersService } from '../users.service';
import { v4 as generateId } from 'uuid';
import { Subject } from 'rxjs';


@Component({
  selector: 'register-form',
  styleUrls: ['../users.component.scss'],
  templateUrl: 'register-form.component.html'
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
  inputError: boolean = false;
  invalidEmail: boolean = false;
  userNameInput$ = new Subject<string>();
  invalidUser: boolean = false;

  constructor(private usersServices: UsersService) {}

  ngOnInit(): void {
    this.newUser.id = generateId();
    this.userNameInput$.subscribe(userName => this.checkUserName(userName))
  }
  
  onRegister(user: User, isValid: boolean, emailNotValid?: boolean): void {
    if (isValid) {
      this.inputError = false;
      this.invalidEmail = false;
      this.usersServices.registerUser(this.newUser)
      .subscribe(data => {
          this.usersServices.setSessionUser(data);
        });
      return;
      }
    this.invalidEmail = emailNotValid;
    this.inputError = true;
  }

  checkUserName(input: string): void {
    this.usersServices.checkUserName(input)
    .subscribe(data => this.invalidUser = !!data.length)
  }
}