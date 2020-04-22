import { Component } from '@angular/core';
import { User } from './models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User;
  loadUserData(event: User) {
    this.currentUser = event;
    console.log('2nd', event);
  }
}
