import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {PowerPlant} from '../models/powerplant.model';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class PowerplantListComponent implements OnInit {
  // represents the URL's
  allPowerPlantsURL = 'powerPlants';
  // represents the data
  powerPlants: PowerPlant[];

  ngOnInit(): void {
    this.allPowerPlants();
  }

  constructor(private apiService: ApiService) {
  }

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
