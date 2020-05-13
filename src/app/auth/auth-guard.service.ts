import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AppStateService } from '../services/app-state.service';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {

  constructor(
    private state: AppStateService,
    public router: Router
    ) {}

    canActivate(): boolean {
      if (!this.state.userOnStart()) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
    }
}