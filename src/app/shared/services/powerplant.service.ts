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
    // pageNumber is mandatory
    if (searchParams.page) {
      params.push(`page=${searchParams.page}`);
    } else {
      params.push(`page=1`);
    }
    // All the other fields are optional
    if (searchParams.powerPlantStatus === 'Active') {
      params.push(`onlyActive=true`);
    } else if (searchParams.powerPlantStatus === 'Disabled') {
      params.push(`onlyActive=false`);
    }
    if (searchParams.powerPlantType) {
      params.push(`powerPlantType=${searchParams.powerPlantType}`);
    }
    if (searchParams.powerPlantOrg) {
      params.push(`org=${searchParams.powerPlantOrg}`);
    }
    if (searchParams.powerPlantName) {
      params.push(`name=${searchParams.powerPlantName}`);
    }
    alert(`${this.allPowerPlantsURL}?${params.join('&')}`);
    return this.apiService.get(`${this.allPowerPlantsURL}?${params.join('&')}`);
  }
}
