export class PowerPlantSearchParams {
  powerPlantType: string;
  powerPlantName: string;
  powerPlantOrg: string;
  isOnlyActivePowerPlants: boolean;

  constructor(powerPlantType: string, powerPlantName: string,
              powerPlantOrg: string, onlyActivePowerPlants: boolean) {
    this.powerPlantName = powerPlantName;
    this.isOnlyActivePowerPlants = onlyActivePowerPlants;
    this.powerPlantOrg = powerPlantOrg;
    this.powerPlantType = powerPlantType;
  }
}
