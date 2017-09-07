import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ApiService } from './api.service';
import { PowerPlant } from '../models';
import {PowerPlantSearchParams} from '../models/powerplantsearchparams.model';

@Injectable()
export class PowerPlantService {
  // represents the URL's
  allPowerPlantsURL = 'powerPlants';
  powerPlants: PowerPlant[];
  constructor (
    private apiService: ApiService
  ) {}

  allPowerPlants(onlyActive: boolean = false, page: number = 1): Observable<any> {
    const params: string = [
      `onlyActive=${onlyActive}`,
      `page=${page}`
    ].join('&');
    return this.apiService.get(`${this.allPowerPlantsURL}?${params}`);
  }

  searchPowerPlants(searchParams: PowerPlantSearchParams): Observable<any> {
    const params: string[] = [];
    // onlyActive flag and pageNumber is mandatory
    if (searchParams.isOnlyActivePowerPlants == null) {
      params.push(`onlyActive=true`);
    } else {
      params.push(`onlyActive=${searchParams.isOnlyActivePowerPlants}`);
    }
    if (searchParams.page == null) {
      params.push(`page=1`);
    } else {
      params.push(`page=${searchParams.page}`);
    }
    // All the other fields are optional
    if (!searchParams.powerPlantType == null) {
      params.push(`powerPlantType=${searchParams.powerPlantType}`);
    }
    if (!searchParams.powerPlantOrg == null) {
      params.push(`org=${searchParams.powerPlantOrg}`);
    }
    if (!searchParams.powerPlantName == null) {
      params.push(`name=${searchParams.powerPlantName}`);
    }
    console.log('query generated is ************ ');
    console.log(`${this.allPowerPlantsURL}?${params.join('&')}`);
    console.log('query generated is ************ ');
    return this.apiService.get(`${this.allPowerPlantsURL}?${params.join('&')}`);
  }
}
