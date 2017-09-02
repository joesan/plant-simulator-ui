import { Component } from '@angular/core';

import { User } from '../models';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  currentUser: User;
  constructor(
    private authService: AuthenticationService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  isLoggedIn() {
    return this.authService.loggedIn();
  }
}
