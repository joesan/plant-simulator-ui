import {Component, Input, OnInit} from '@angular/core';
import {PowerPlant} from '../shared/models/powerplant.model';
import {PowerPlantService} from '../shared/services/powerplant.service';

@Component({
  selector: 'app-powerplant',
  templateUrl: './powerplant.component.html'
})
export class PowerplantComponent implements OnInit {

  powerPlantService: PowerPlantService;
  powerPlants: PowerPlant[];
  @Input() powerPlant: PowerPlant;

  constructor(powerPlantService: PowerPlantService) {
    this.powerPlantService = powerPlantService;
  }

  ngOnInit() {
    console.log('calling power plants');
    this.powerPlantService.allPowerPlants().subscribe(result => {
      this.powerPlants = <PowerPlant[]> result;
    });
  }
}
