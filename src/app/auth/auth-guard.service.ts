import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import { AppStateService } from '../app-state.service';

@Injectable({providedIn: 'root'})

export class AuthGuardService implements CanActivate {

  constructor(
    private state: AppStateService,
    public router: Router
    ) {}

    canActivate(): boolean {
      if (!this.state.userOnStart()) {
        this.router.navigate(['user']);
        return false;
      }
      return true;
    }
}