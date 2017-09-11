import {AfterViewChecked, Component, OnInit} from '@angular/core';

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
  powerPlants: PowerPlant[] = [];
  scrollCallback;
  // Indicates if the searchButton was clicked or not!
  isSearchButtonClicked = false;

  currentPage = 1;

  constructor(private powerPlantService: PowerPlantService) {
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // Set the initial values for the drop down fields in the UI
    this.resetForm();

    this.scrollCallback = this.searchPowerPlants.bind(this);
  }

  ngOnInit() {}

  emptyAndBindNew() {
    this.isSearchButtonClicked = true;
    this.powerPlants = [];
    this.currentPage = 1;
    // this.scrollCallback = this.searchPowerPlants.bind(this);
  }

  resetForm() {
    this.model.powerPlantOrg = '';
    this.model.powerPlantName = '';
    this.model.powerPlantType = '';
    this.model.powerPlantStatus = '';
  }
/*
  searchPowerPlants() {
    alert('page number is ' + this.currentPage);
    const powerPlantSearchParams = new PowerPlantSearchParams(
      this.model.powerPlantType,
      this.model.powerPlantOrg,
      this.model.powerPlantName,
      this.model.powerPlantStatus);
    // this.scrollCallback = this.searchPowerPlants.bind(this);
    // const something = this.powerPlantService.searchPowerPlants(powerPlantSearchParams, this.currentPage);
    return this.powerPlantService.searchPowerPlants(powerPlantSearchParams, this.currentPage).do(this.processData);
  } */

  searchPowerPlants() {
    if (this.isSearchButtonClicked === true) {
      this.isSearchButtonClicked = false;
      // Reset the old entries
      this.powerPlants = [];
      this.currentPage = 1;
      this.searchPowerPlants();
    } else {
//      alert('page number is ' + this.currentPage);
      const powerPlantSearchParams = new PowerPlantSearchParams(
        this.model.powerPlantType,
        this.model.powerPlantName,
        this.model.powerPlantOrg,
        this.model.powerPlantStatus);
       // this.scrollCallback = this.searchPowerPlants.bind(this);
      const something = this.powerPlantService.searchPowerPlants(powerPlantSearchParams, this.currentPage);
      alert(something);
      return something.do(this.processData);
    }
  }

  private processData = (newPowerPlants) => {
    this.currentPage++;
    alert(newPowerPlants);
    // this.powerPlants = this.powerPlants.concat(newPowerPlants.json());
    // this.powerPlants = this.powerPlants.concat(newPowerPlants);
    setTimeout(() => this.powerPlants = this.powerPlants.concat(newPowerPlants));
  }
/*
  allPowerPlants(onlyActive: boolean = false, page: number = 1): void {
    this.powerPlantService.allPowerPlants(onlyActive, page).subscribe(result => {
      this.powerPlants = <PowerPlant[]> result;
    });
  } */
}
