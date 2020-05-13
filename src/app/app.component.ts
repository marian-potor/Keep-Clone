import { Component, OnInit } from '@angular/core';
import { User } from './models/user.interface';
import { UsersService } from './services/users.service';
import { AppStateService } from './services/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userFirstName: string = '';

  constructor(
    private usersServices: UsersService,
    private state: AppStateService
    ) {}

  ngOnInit(): void {
    this.state.getUser().subscribe(data => this.userFirstName = data.firstName);
    const sesionUser = {...JSON.parse(localStorage.getItem('sessionUser'))};
    if (sesionUser.username) {
      this.usersServices.logIn(sesionUser)
      .subscribe((data: User[]) => {
        this.state.setUser(data[0]);
      });
    }
  }
}
