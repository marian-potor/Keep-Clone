import { Component, Input } from '@angular/core';
import { AppStateService } from '../app-state.service';
import { Router } from '@angular/router';
import { IconDefinition, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchIcon: IconDefinition = faSearch;
  prevUrl: string[];

  @Input()
  userFirstName: string

  constructor(
    private state: AppStateService,
    readonly router: Router
    ) {}

  onLogOut(): void {
    this.state.removeUser();
    localStorage.removeItem('sessionUser');
    this.router.navigate(['login']);
  }
}
