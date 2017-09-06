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
    if (!searchParams.isOnlyActivePowerPlants == null) {
      params.push(`onlyActive=${searchParams.isOnlyActivePowerPlants}`);
    }
    if (!searchParams.powerPlantType == null) {
      params.push(`powerPlantType=${searchParams.powerPlantType}`);
    }
    if (!searchParams.powerPlantOrg == null) {
      params.push(`org=${searchParams.powerPlantOrg}`);
    }
    if (!searchParams.powerPlantName == null) {
      params.push(`name=${searchParams.powerPlantName}`);
    }
    params.join('&');
    return this.apiService.get(`${this.allPowerPlantsURL}?${params.join('&')}`);
  }
}
