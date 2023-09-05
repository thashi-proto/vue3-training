// types/Prefecture.ts

export interface Prefecture {
  prefCode: number;
  prefName: string;
}

export interface PopulationData {
  year: number;
  totalPopulation: number;
  youngPopulation: number;
  productivePopulation: number;
  elderlyPopulation: number;
}