import { Component, OnInit } from '@angular/core';

import { PowerPlantService, UserService } from '../shared';
import { User } from '../shared/models/user.model';
import { PowerPlant } from '../shared/models/powerplant.model';
import {PowerPlantSearchParams} from '../shared/models/powerplantsearchparams.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // Represents the PowerPlantTypes
  powerPlantTypes = ['RampUpType', 'OnOffType'];
  // Represents the search form
  model: any = {};
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

  searchPowerPlants(): void {
    const powerPlantSearchParams = new PowerPlantSearchParams(
      this.model.powerPlantType,
      this.model.powerPlantOrganization,
      this.model.powerPlantName,
      this.model.page,
      this.model.powerPlantStatus);

    this.powerPlantService.searchPowerPlants(powerPlantSearchParams).subscribe(result => {
      this.powerPlants = <PowerPlant[]> result;
    });
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
