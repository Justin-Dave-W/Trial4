import React from 'react';
import { Country } from '../types';

interface ComparisonChartProps {
  countries: Country[];
}

export function ComparisonChart({ countries }: ComparisonChartProps) {
  const metrics = [
    { 
      name: 'Factory Count', 
      key: 'factoryCount',
      format: (v: number | null) => v !== null ? v.toLocaleString() : 'N/A',
      isHigherBetter: true
    },
    { 
      name: 'Total Workers', 
      key: 'workerCount',
      format: (v: number | null) => v !== null ? v.toLocaleString() : 'N/A',
      isHigherBetter: true
    },
    { 
      name: 'Labor Cost', 
      key: 'laborCost',
      format: (v: number) => `$${v.toFixed(2)}`,
      isHigherBetter: false
    },
    { 
      name: 'Infrastructure', 
      key: 'infrastructureScore',
      format: (v: number) => `${v}/100`,
      isHigherBetter: true
    },
    { 
      name: 'Political Stability', 
      key: 'politicalStabilityScore',
      format: (v: number) => `${v}/100`,
      isHigherBetter: true
    },
    { 
      name: 'Logistics Score', 
      key: 'logisticsScore',
      format: (v: number) => `${v}/100`,
      isHigherBetter: true
    },
    { 
      name: 'Time to Market', 
      key: 'timeToMarket',
      format: (v: number) => `${v} days`,
      isHigherBetter: false
    },
  ] as const;

  const getBestValue = (metric: typeof metrics[number], countries: Country[]) => {
    const values = countries
      .map(country => country[metric.key])
      .filter((value): value is number => value !== null);
    
    if (values.length === 0) return null;
    
    return metric.isHigherBetter
      ? Math.max(...values)
      : Math.min(...values);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Metric
            </th>
            {countries.map((country) => (
              <th
                key={country.id}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {country.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {metrics.map((metric) => {
            const bestValue = getBestValue(metric, countries);
            
            return (
              <tr key={metric.key} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {metric.name}
                </td>
                {countries.map((country) => {
                  const value = country[metric.key];
                  const isBest = value !== null && bestValue !== null && value === bestValue;
                  
                  return (
                    <td
                      key={country.id}
                      className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${
                        isBest ? 'font-bold' : ''
                      }`}
                    >
                      {metric.format(value)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Trade Agreements
            </td>
            {countries.map((country) => (
              <td
                key={country.id}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                {country.tradeAgreements.join(', ')}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
