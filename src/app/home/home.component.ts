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
  // Represents the status of a PowerPlant
  powerPlantStatuses = ['Active & Disabled', 'Active', 'Disabled'];
  // Represents the search form
  model: any = {};
  // currentUser: User;
  // represents the list of PowerPlant data
  powerPlants: PowerPlant[];
  users: User[] = [];

  constructor(private powerPlantService: PowerPlantService) {
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // Set the initial values for the drop down fields in the UI
    this.resetForm();
  }

  ngOnInit() {}

  resetForm() {
    this.model.powerPlantOrg = '';
    this.model.powerPlantName = '';
    this.model.powerPlantType = '';
    this.model.powerPlantStatus = '';
  }

  searchPowerPlants(): void {
    const powerPlantSearchParams = new PowerPlantSearchParams(
      this.model.powerPlantType,
      this.model.powerPlantOrg,
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
}
