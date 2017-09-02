export interface PowerPlant {
  powerPlantId: number;
  powerPlantName: string;
  minPower: number;
  maxPower: number;
  powerPlantType: string;
  rampRateInSeconds?: number;
  rampPowerRate?: number;
}
