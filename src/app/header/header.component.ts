import { Component, Input, Output, EventEmitter, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AppStateService } from '../services/app-state.service';
import { Router } from '@angular/router';
import { IconDefinition, faSearch, faSignOutAlt, faSignInAlt, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit{
  searchIcon: IconDefinition = faSearch;
  signOutIcon: IconDefinition = faSignOutAlt;
  signInIcon: IconDefinition = faSignInAlt;
  menu: IconDefinition = faBars;
  prevUrl: string[];
  dropdownMenu: boolean = false;
  displayDropdown: boolean = false;

  @Input()
  userFirstName: string;

  @Output()
  editUser: EventEmitter<null> = new EventEmitter<null>()

  constructor(
    private state: AppStateService,
    readonly router: Router,
    private elem: ElementRef,
    private changeDetector: ChangeDetectorRef,
    ) {}

  ngAfterViewInit() {
    this.resize();
    this.changeDetector.detectChanges();
  }

  onLogOut(): void {
    this.state.removeUser();
    localStorage.removeItem('sessionUser');
    this.router.navigate(['login']);
  }

  onLogIn(): void {
    this.router.navigate(['login'])
  }

  onEdit(): void {
    this.editUser.emit();
  }

  goToPayPlans(): void {
    this.router.navigate(['payment-plans']);
  }

  goToNotes(): void {
    this.router.navigate(['notes']);
  }

  resize(): void {
    const navLinks: HTMLDivElement[] = this.elem.nativeElement.querySelectorAll('.nav-link');
    const container: HTMLDivElement = this.elem.nativeElement.querySelector('.nav-container');
    let linksWidth: number = 0;
    for (let item of navLinks) {
      linksWidth += item.clientWidth
    }
    if (linksWidth > container.clientWidth) {
      this.dropdownMenu = true;
      return;
    } 
    this.dropdownMenu = false;
    this.displayDropdown = false;
    // console.log(container.clientWidth, linksWidth);
  }

  toggleDropdown(): void {
    this.displayDropdown = !this.displayDropdown;
  }
}
