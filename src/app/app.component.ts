import { Component } from '@angular/core';
import { User } from './models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User;
  userLoggedIn: boolean = false;
  loadUserData(event: User) {
    this.currentUser = event;
    this.userLoggedIn = true;
  }
  onLogOut() {
    this.currentUser = Object.assign({});
    this.userLoggedIn = false;
  }
}
