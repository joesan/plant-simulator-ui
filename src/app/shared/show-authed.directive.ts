import {
  Directive,
  OnInit,
} from '@angular/core';

import { User } from './models/user.model';

@Directive({ selector: '[showAuthed]' })
export class ShowAuthedDirective implements OnInit {
  currentUser: User;
  condition: boolean;

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser != null) {
      this.condition = true;
    } else {
      this.condition = false;
    }
  }

  constructor() {
  }
}
