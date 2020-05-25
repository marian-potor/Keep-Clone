import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppStateService } from '../services/app-state.service';
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
  userFirstName: string;

  @Output()
  editUser: EventEmitter<null> = new EventEmitter<null>()

  constructor(
    private state: AppStateService,
    readonly router: Router
    ) {}

  onLogOut(): void {
    this.state.removeUser();
    localStorage.removeItem('sessionUser');
    this.router.navigate(['login']);
  }

  onEdit(): void {
    this.editUser.emit();
  }

  goToPayPlans() {
    this.router.navigate(['payment-plans'])
  }
}
