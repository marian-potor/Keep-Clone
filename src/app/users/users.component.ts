import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.interface';
import { AppStateService } from '../app-state.service';
import { Credentials } from '../models/userCredentials.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  styleUrls: ['./users.component.scss'],
  template: `
    <div class="users-component">
      <div class="credentials-container">
        <router-outlet></router-outlet>
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

  constructor (
    private router: Router
    ) {}

  toggleUserOptions() {
    if (this.newUser) {
      this.router.navigate(['user/register']);
    }else{
      this.router.navigate(['user/login']);
    }
    this.newUser = !this.newUser;
  }
}
