import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-users',
  styleUrls: ['./users.component.scss'],
  template: `
    <div class="users-component">
      <div class="credentials-container">
        <login-form *ngIf="!newUser"></login-form>
        <register-form *ngIf="newUser"></register-form>
        <div>
          <p *ngIf="!newUser">Don't have an account?<a (click)="toggleUserOptions()"> Register</a></p>
          <p *ngIf="newUser">Already have an account?<a (click)="toggleUserOptions()"> Login</a></p>
        </div>
      </div>
    <div>
  `
})
export class UsersComponent implements OnInit{
  newUser: boolean = true;

  constructor (
    private router: Router,
    ) {}

  ngOnInit(): void {
    if (this.router.url.includes('login')) {
      this.newUser = false;
    }
  }

  toggleUserOptions() {
    this.newUser = !this.newUser;
    if (this.router.url.includes('login')) {
      this.router.navigate(['register']);
      this.newUser = true;
    }else{
      this.router.navigate(['login']);
      this.newUser = false;
    }
  }
}
