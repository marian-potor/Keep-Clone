import { Component, OnInit } from '@angular/core';
import { User } from './models/user.interface';
import { UsersService } from './users/users.service';
import { AppStateService } from './app-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userFirstName: string = '';

  constructor(
    private usersServices: UsersService,
    private state: AppStateService,
    private router: Router
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

  onLogOut(): void {
    this.state.removeUser();
    localStorage.removeItem('sessionUser');
    this.router.navigate(['login']);
  }
}
