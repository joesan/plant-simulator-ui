export class PowerPlantSearchParams {
  powerPlantType: string;
  powerPlantName: string;
  powerPlantOrg: string;
  page: number;
  isOnlyActivePowerPlants: boolean;

  constructor(powerPlantType: string, powerPlantName: string,
              powerPlantOrg: string, page: number, onlyActivePowerPlants: boolean) {
    this.powerPlantName = powerPlantName;
    this.isOnlyActivePowerPlants = onlyActivePowerPlants;
    this.powerPlantOrg = powerPlantOrg;
    this.page = page;
    this.powerPlantType = powerPlantType;
  }
}
