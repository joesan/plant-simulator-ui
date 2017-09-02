import { Component, OnInit } from '@angular/core';

import { PowerPlantService, UserService } from '../shared';
import { User } from '../shared/models/user.model';
import { PowerPlant } from '../shared/models/powerplant.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // currentUser: User;
  // represents the list of PowerPlant data
  powerPlants: PowerPlant[];
  users: User[] = [];

  constructor(private userService: UserService, private powerPlantService: PowerPlantService) {
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.allPowerPlants();
  }

  allPowerPlants(onlyActive: boolean = false, page: number = 1): void {
    this.powerPlantService.allPowerPlants(onlyActive, page).subscribe(result => {
      this.powerPlants = <PowerPlant[]> result;
    });
  }

  /*
    ngOnInit() {
      this.loadAllUsers();
    }

    deleteUser(id: number) {
      this.userService.delete(id).subscribe(() => { this.loadAllUsers(); });
    }

    private loadAllUsers() {
      this.userService.getAll().subscribe(users => { this.users = users; });
    } */
}
