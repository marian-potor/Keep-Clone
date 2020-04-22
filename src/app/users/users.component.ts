import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-users',
  styleUrls: ['./users.component.scss'],
  template: `
    <login-form *ngIf="!newUser" (logedInUser)="onAuthorize($event)"></login-form>
    <register-form *ngIf="newUser" (registeredUser)="onAuthorize($event)"></register-form>
    <div>
      <button (click)="toggleUserOptions()">{{newUser?'Log In':'Register'}}</button>
    </div>
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
