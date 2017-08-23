import {PowerPlantType} from './powerplanttype.model';

export class PowerPlant {
  powerPlantId: number;
  orgName: string;
  minPower: string;
  maxPower: boolean;
  // TODO: add rampRateSeconds and rampPowerRate
  powerPlantType: PowerPlantType;
}
