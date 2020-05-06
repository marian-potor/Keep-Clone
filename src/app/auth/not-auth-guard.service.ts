import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AppStateService } from '../app-state.service';

@Injectable({providedIn: 'root'})

export class NotAuthGuard implements CanActivate {

  constructor(
    private state: AppStateService,
    public router: Router
    ) {}

    canActivate(): boolean {
      if (this.state.userOnStart()) {
        this.router.navigate(['notes']);
        return false;
      }
      return true;
    }
}