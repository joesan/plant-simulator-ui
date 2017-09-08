export class PowerPlantSearchParams {
  powerPlantType: string;
  powerPlantName: string;
  powerPlantOrg: string;
  page: number;
  powerPlantStatus: string;

  constructor(powerPlantType: string, powerPlantName: string,
              powerPlantOrg: string, page: number, powerPlantStatus: string) {
    this.powerPlantName = powerPlantName;
    this.powerPlantStatus = powerPlantStatus;
    this.powerPlantOrg = powerPlantOrg;
    this.page = page;
    this.powerPlantType = powerPlantType;
  }
}
