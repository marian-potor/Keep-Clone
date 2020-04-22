import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-users',
  styleUrls: ['./users.component.scss'],
  template: `
    <login-form (logedInUser)="onLogIn($event)"></login-form>
  `
})
export class UsersComponent {

  @Output()
  user: EventEmitter<User> = new EventEmitter<User>();

  onLogIn(recurentUser: User) {
    this.user.emit(recurentUser);
  }
}
