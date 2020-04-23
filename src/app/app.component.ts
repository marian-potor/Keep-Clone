import { Component, OnInit } from '@angular/core';
import { User } from './models/user.interface';
import { UsersService } from './users/users.service';
import { Credentials } from './models/userCredentials.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentUser: User;
  userLoggedIn: boolean = false;

  constructor(private usersServices: UsersService) {}

  ngOnInit() {
    const sesionUser = {...JSON.parse(localStorage.getItem('sesionUser'))};
    if (sesionUser.username) {
      this.usersServices.logIn(sesionUser)
      .subscribe((data: User[]) => {
        this.currentUser = data[0];
        this.userLoggedIn = true;
      });
    }
  }

  loadUserData(event: User) {
    const minifiedUser: Credentials = {username: event.username, password: event.password};
    localStorage.setItem('sesionUser', JSON.stringify(minifiedUser));
    this.currentUser = event;
    this.userLoggedIn = true;
  }

  onLogOut() {
    this.currentUser = Object.assign({});
    localStorage.removeItem('sesionUser');
    this.userLoggedIn = false;
  }
}
