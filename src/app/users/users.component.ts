import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-users',
  styleUrls: ['./users.component.scss'],
  template: `
    <div class="users-component">
      <div class="credentials-container">
        <login-form *ngIf="!newUser" (logedInUser)="onAuthorize($event)"></login-form>
        <register-form *ngIf="newUser" (registeredUser)="onAuthorize($event)"></register-form>
        <div>
          <p *ngIf="!newUser">Don't have an account?<a (click)="toggleUserOptions()"> Register</a></p>
          <p *ngIf="newUser">Already have an account?<a (click)="toggleUserOptions()"> Login</a></p>
        </div>
      </div>
    <div>
  `
})
export class UsersComponent {
  newUser: boolean = false;

  @Output()
  user: EventEmitter<User> = new EventEmitter<User>();

  onAuthorize(recurentUser: User) {
    this.user.emit(recurentUser);
  }

  toggleUserOptions() {
    this.newUser = !this.newUser;
  }
}
