import React from 'react';

interface TariffRate {
  material: string;
  composition: string;
  rate: string;
  chinaRate: string;
}

const tariffData: TariffRate[] = [
  {
    material: 'Polyester',
    composition: '100%',
    rate: '14.9% to 28.2%',
    chinaRate: '34.9% to 48.2%'
  },
  {
    material: 'Polyamide/Nylon',
    composition: '100%',
    rate: '14.9% to 28.2%',
    chinaRate: '34.9% to 48.2%'
  },
  {
    material: 'Polyurethane',
    composition: '100%',
    rate: '5.6% to 28.2%',
    chinaRate: '25.6% to 48.2%'
  },
  {
    material: 'Wool',
    composition: '50%-62%',
    rate: 'Approximately 16%',
    chinaRate: 'Approximately 36%'
  },
  {
    material: 'Elastane/Spandex',
    composition: '7%',
    rate: '14.9% to 28.2%',
    chinaRate: '34.9% to 48.2%'
  },
  {
    material: 'Viscose Rayon',
    composition: '17%',
    rate: '5.6% to 28.2%',
    chinaRate: '25.6% to 48.2%'
  }
];

export function TariffSection() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Product-Specific Tariff Rates</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Material
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Composition
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Standard Rate
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                China Rate
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tariffData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.material}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.composition}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.rate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.chinaRate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        <p>Source: USITC HTS 2025 - Chapter 61-63 Textile Articles (Updated January 2025)</p>
        <p>Note: China rates include Section 301 tariffs (10% + 10%)</p>
      </div>
    </div>
  );
}
