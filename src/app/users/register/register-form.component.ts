import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { UsersService } from '../../services/users.service';
import { v4 as generateId } from 'uuid';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { IconDefinition, faUser, faKey, faEnvelope, faUserTie, faSignature, faUserTimes, faUserCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'register-form',
  styleUrls: ['../users.component.scss'],
  templateUrl: 'register-form.component.html'
})

export class RegisterFormComponent implements OnInit {
  newUser: User = {
    id: '',
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    noteList: []
  }

  item: User;
 
  userNameInput$ = new Subject<string>();
  invalidUser: boolean = false;
  firstNameIcon: IconDefinition = faUserTie;
  lastNameIcon: IconDefinition = faSignature;
  mailIcon: IconDefinition = faEnvelope;
  userIcon: IconDefinition = faUser;
  passwordIcon: IconDefinition = faKey;
  userError: IconDefinition = faUserTimes;
  userSucces: IconDefinition = faUserCheck;
  forPrimaryUse: boolean = true;

  public close: () => void;

  constructor(private usersServices: UsersService) {}

  ngOnInit(): void {
    if (this.item) {
      this.newUser = Object.assign({}, this.item)
    } else {
      this.newUser.id = generateId();
    }
    this.userNameInput$.pipe(
      debounceTime(500)
    )
    .subscribe(userName => this.checkUserName(userName))
  }
  
  onRegister(isValid: boolean): void {
    if (isValid) {
      (this.forPrimaryUse ? this.usersServices.registerUser(this.newUser) : this.usersServices.updateUser(this.newUser))
      .subscribe(data => {
          this.usersServices.setSessionUser(data);
          this.forPrimaryUse ? null : this.close();
        });
      }
  }

  checkUserName(input: string): void {
    this.usersServices.checkUserName(input)
    .subscribe(data => this.invalidUser = !!data.length)
  }
}