import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ApiService } from './api.service';
import { PowerPlant } from '../models';
import {PowerPlantSearchParams} from '../models/powerplantsearchparams.model';

@Injectable()
export class PowerPlantService {
  // represents the URL's
  allPowerPlantsURL = 'powerPlants';
  // powerPlants: PowerPlant[];
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

  private generateData() {
    let powerPlantArray: PowerPlant[] = [];
    for (let i = 0; i < 20; i++) {
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
        powerPlantArray.concat(p);
      }
    }
    return powerPlantArray;
  }

  searchPowerPlants(searchParams: PowerPlantSearchParams, page: number): Observable<any> {
    const params: string[] = [];
    // pageNumber is mandatory
    if (page) {
      params.push(`page=${page}`);
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
    alert(params.join('&'));
    alert('generated data ' + this.generateData());
    // return this.apiService.get(`${this.allPowerPlantsURL}?${params.join('&')}`);
    return Observable.of(this.generateData());
  }
}
