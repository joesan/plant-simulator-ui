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
  // represents the list of PowerPlant data
  powerPlants: PowerPlant[];
  scrollCallback;

  currentPage = 1;

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

  private generateData() {
    const powerPlantArray: PowerPlant[] = null;
    for (let i = 0; i < 5; i++) {
      if (i % 2 === 0) {
        const p: PowerPlant = {
          powerPlantId: i,
          powerPlantName: `PowerPlant ${i}`,
          minPower: 100,
          maxPower: 200,
          powerPlantType: 'OnOffType'
        };
        powerPlantArray.push(p);
      } else {
        const p: PowerPlant = {
          powerPlantId: i,
          powerPlantName: `PowerPlant ${i}`,
          minPower: 100,
          maxPower: 200,
          powerPlantType: 'RampUpType',
          rampPowerRate: 10,
          rampRateInSeconds: 2
        };
        powerPlantArray.push(p);
      }
    }
    return powerPlantArray;
  }

  searchPowerPlants() {
    const powerPlantSearchParams = new PowerPlantSearchParams(
      this.model.powerPlantType,
      this.model.powerPlantOrg,
      this.model.powerPlantName,
      this.model.powerPlantStatus);
/*
    this.powerPlantService.searchPowerPlants(powerPlantSearchParams).subscribe(result => {
      this.powerPlants = <PowerPlant[]> result;
    }); */
    this.scrollCallback = this.searchPowerPlants.bind(this);
    alert('calling');
    const something = this.powerPlantService.searchPowerPlants(powerPlantSearchParams, this.currentPage);
    return this.powerPlantService.searchPowerPlants(powerPlantSearchParams, this.currentPage).map(elem => {
      alert('mapping data');
      this.generateData();
      })
      .do(this.processData);
  }

  private processData = (newPowerPlants) => {
    alert('In processData');
    this.currentPage++;
    // this.powerPlants = this.powerPlants.concat(newPowerPlants.json());
    this.powerPlants = this.powerPlants.concat(this.generateData());
  }

  allPowerPlants(onlyActive: boolean = false, page: number = 1): void {
    this.powerPlantService.allPowerPlants(onlyActive, page).subscribe(result => {
      this.powerPlants = <PowerPlant[]> result;
    });
  }
}
