import { Component, Input } from '@angular/core';
import { AppStateService } from '../app-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input()
  userFirstName: string

  constructor(
    private state: AppStateService,
    private router: Router
    ) {}

  onLogOut(): void {
    this.state.removeUser();
    localStorage.removeItem('sessionUser');
    this.router.navigate(['login']);
  }
}
