import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { PowerPlant } from '../models';
import {PowerPlantListConfig} from '../models/powerplant-list.model';

@Injectable()
export class PowerPlantService {
  // represents the URL's
  allPowerPlantsURL = 'powerPlants';
  powerPlants: PowerPlant[];
  constructor (
    private apiService: ApiService
  ) {}

  allPowerPlants(onlyActive: boolean = false, page: number = 1): void {
    const params: string = [
      `onlyActive=${onlyActive}`,
      `page=${page}`
    ].join('&');
    const path = `${this.allPowerPlantsURL}?${params}`;
    this.apiService.get(path).subscribe(result => {
      this.powerPlants = <PowerPlant[]> result;
    });
  }
}
