export interface Country {
  id: string;
  name: string;
  laborCost: number;
  infrastructureScore: number;
  politicalStabilityScore: number;
  logisticsScore: number;
  timeToMarket: number;
  taxRate: number;
  tradeAgreements: string[];
  factoryCount: number;
  workerCount: number;
  dataSources: {
    laborCost: string;
    infrastructure: string;
    politicalStability: string;
    logistics: string;
    timeToMarket: string;
    taxRate: string;
    workforceStats: string;
  };
  lastUpdated: {
    laborCost: string;
    infrastructure: string;
    politicalStability: string;
    logistics: string;
    timeToMarket: string;
    taxRate: string;
    workforceStats: string;
  };
}

export interface ComparisonMetric {
  name: string;
  key: keyof Country;
  description: string;
  format: (value: any) => string;
  isHigherBetter: boolean;
}
