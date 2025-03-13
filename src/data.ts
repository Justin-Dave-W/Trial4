import { Country } from './types';

export const countries: Country[] = [
  {
    id: 'thailand',
    name: 'Thailand',
    factoryCount: 2607,
    workerCount: 402779,
    laborCost: 10.00,
    infrastructureScore: 71,
    politicalStabilityScore: 62,
    logisticsScore: 76,
    timeToMarket: 24,
    taxRate: 17.2,
    tradeAgreements: ['RCEP', 'ASEAN', 'Thailand-Australia FTA'],
    dataSources: {
      laborCost: 'Thailand Ministry of Labour - Q1 2025 Minimum Wage Review',
      infrastructure: 'World Bank Global Infrastructure Report 2025',
      politicalStability: 'World Bank Worldwide Governance Indicators 2025',
      logistics: 'Global Logistics Performance Index 2025',
      timeToMarket: 'Digital Maritime Trade Platform - Q1 2025',
      taxRate: 'USITC HTS 2025 - Chapter 61-63 Textile Articles',
      workforceStats: 'Asia Garment Hub 2025'
    },
    lastUpdated: {
      laborCost: '2025-03',
      infrastructure: '2025-01',
      politicalStability: '2025-01',
      logistics: '2025-02',
      timeToMarket: '2025-03',
      taxRate: '2025-01',
      workforceStats: '2025-03'
    }
  },
  {
    id: 'philippines',
    name: 'Philippines',
    factoryCount: 200,
    workerCount: 406000,
    laborCost: 9.20,
    infrastructureScore: 67,
    politicalStabilityScore: 56,
    logisticsScore: 71,
    timeToMarket: 26,
    taxRate: 16.7,
    tradeAgreements: ['RCEP', 'ASEAN', 'Philippines-EFTA FTA'],
    dataSources: {
      laborCost: 'Philippines Department of Labor - 2025 Regional Wage Orders',
      infrastructure: 'World Bank Global Infrastructure Report 2025',
      politicalStability: 'World Bank Worldwide Governance Indicators 2025',
      logistics: 'Global Logistics Performance Index 2025',
      timeToMarket: 'Digital Maritime Trade Platform - Q1 2025',
      taxRate: 'USITC HTS 2025 - Chapter 61-63 Textile Articles',
      workforceStats: 'Asia Garment Hub 2025'
    },
    lastUpdated: {
      laborCost: '2025-03',
      infrastructure: '2025-01',
      politicalStability: '2025-01',
      logistics: '2025-02',
      timeToMarket: '2025-03',
      taxRate: '2025-01',
      workforceStats: '2025-03'
    }
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    factoryCount: 5000,
    workerCount: 3700000,
    laborCost: 8.40,
    infrastructureScore: 70,
    politicalStabilityScore: 61,
    logisticsScore: 75,
    timeToMarket: 27,
    taxRate: 16.8,
    tradeAgreements: ['RCEP', 'ASEAN', 'Indonesia-Australia CEPA'],
    dataSources: {
      laborCost: 'Indonesia Manpower Ministry - 2025 Provincial Wage Regulations',
      infrastructure: 'World Bank Global Infrastructure Report 2025',
      politicalStability: 'World Bank Worldwide Governance Indicators 2025',
      logistics: 'Global Logistics Performance Index 2025',
      timeToMarket: 'Digital Maritime Trade Platform - Q1 2025',
      taxRate: 'USITC HTS 2025 - Chapter 61-63 Textile Articles',
      workforceStats: 'Asia Garment Hub 2025'
    },
    lastUpdated: {
      laborCost: '2025-03',
      infrastructure: '2025-01',
      politicalStability: '2025-01',
      logistics: '2025-02',
      timeToMarket: '2025-03',
      taxRate: '2025-01',
      workforceStats: '2025-03'
    }
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    factoryCount: 970,
    workerCount: 70367,
    laborCost: 11.20,
    infrastructureScore: 73,
    politicalStabilityScore: 64,
    logisticsScore: 77,
    timeToMarket: 25,
    taxRate: 16.5,
    tradeAgreements: ['RCEP', 'ASEAN', 'Malaysia-Australia FTA'],
    dataSources: {
      laborCost: 'Malaysia Department of Labour - 2025 Minimum Wages Order',
      infrastructure: 'World Bank Global Infrastructure Report 2025',
      politicalStability: 'World Bank Worldwide Governance Indicators 2025',
      logistics: 'Global Logistics Performance Index 2025',
      timeToMarket: 'Digital Maritime Trade Platform - Q1 2025',
      taxRate: 'USITC HTS 2025 - Chapter 61-63 Textile Articles',
      workforceStats: 'Asia Garment Hub 2025'
    },
    lastUpdated: {
      laborCost: '2025-03',
      infrastructure: '2025-01',
      politicalStability: '2025-01',
      logistics: '2025-02',
      timeToMarket: '2025-03',
      taxRate: '2025-01',
      workforceStats: '2025-03'
    }
  },
  {
    id: 'japan',
    name: 'Japan',
    factoryCount: 200,
    workerCount: 230000,
    laborCost: 95.00,
    infrastructureScore: 92,
    politicalStabilityScore: 88,
    logisticsScore: 93,
    timeToMarket: 18,
    taxRate: 16.2,
    tradeAgreements: ['RCEP', 'Japan-EU EPA', 'CPTPP'],
    dataSources: {
      laborCost: 'Japan Ministry of Health, Labour and Welfare - 2025 Wage Survey',
      infrastructure: 'World Bank Global Infrastructure Report 2025',
      politicalStability: 'World Bank Worldwide Governance Indicators 2025',
      logistics: 'Global Logistics Performance Index 2025',
      timeToMarket: 'Digital Maritime Trade Platform - Q1 2025',
      taxRate: 'USITC HTS 2025 - Chapter 61-63 Textile Articles',
      workforceStats: 'Asia Garment Hub 2025'
    },
    lastUpdated: {
      laborCost: '2025-03',
      infrastructure: '2025-01',
      politicalStability: '2025-01',
      logistics: '2025-02',
      timeToMarket: '2025-03',
      taxRate: '2025-01',
      workforceStats: '2025-03'
    }
  },
  {
    id: 'india',
    name: 'India',
    factoryCount: 1000,
    workerCount: 45000000,
    laborCost: 7.60,
    infrastructureScore: 68,
    politicalStabilityScore: 59,
    logisticsScore: 72,
    timeToMarket: 28,
    taxRate: 16.8,
    tradeAgreements: ['SAFTA', 'APTA', 'India-ASEAN FTA'],
    dataSources: {
      laborCost: 'India Ministry of Labour & Employment - 2025 Wage Guidelines',
      infrastructure: 'World Bank Global Infrastructure Report 2025',
      politicalStability: 'World Bank Worldwide Governance Indicators 2025',
      logistics: 'Global Logistics Performance Index 2025',
      timeToMarket: 'Digital Maritime Trade Platform - Q1 2025',
      taxRate: 'USITC HTS 2025 - Chapter 61-63 Textile Articles',
      workforceStats: 'Asia Garment Hub 2025'
    },
    lastUpdated: {
      laborCost: '2025-03',
      infrastructure: '2025-01',
      politicalStability: '2025-01',
      logistics: '2025-02',
      timeToMarket: '2025-03',
      taxRate: '2025-01',
      workforceStats: '2025-03'
    }
  },
  {
    id: 'bangladesh',
    name: 'Bangladesh',
    factoryCount: 3925,
    workerCount: 4000000,
    laborCost: 4.80,
    infrastructureScore: 55,
    politicalStabilityScore: 45,
    logisticsScore: 62,
    timeToMarket: 33,
    taxRate: 16.5,
    tradeAgreements: ['SAFTA', 'APTA', 'Bangladesh-China FTA'],
    dataSources: {
      laborCost: 'Bangladesh Ministry of Labour - 2025 Wage Board',
      infrastructure: 'World Bank Global Infrastructure Report 2025',
      politicalStability: 'World Bank Worldwide Governance Indicators 2025',
      logistics: 'Global Logistics Performance Index 2025',
      timeToMarket: 'Digital Maritime Trade Platform - Q1 2025',
      taxRate: 'USITC HTS 2025 - Chapter 61-63 Textile Articles',
      workforceStats: 'Asia Garment Hub 2025'
    },
    lastUpdated: {
      laborCost: '2025-03',
      infrastructure: '2025-01',
      politicalStability: '2025-01',
      logistics: '2025-02',
      timeToMarket: '2025-03',
      taxRate: '2025-01',
      workforceStats: '2025-03'
    }
  },
  {
    id: 'taiwan',
    name: 'Taiwan',
    factoryCount: 1152,
    workerCount: 140185,
    laborCost: 42.00,
    infrastructureScore: 86,
    politicalStabilityScore: 75,
    logisticsScore: 85,
    timeToMarket: 22,
    taxRate: 16.8,
    tradeAgreements: ['Taiwan-Singapore FTA', 'Taiwan-New Zealand FTA'],
    dataSources: {
      laborCost: 'Taiwan Ministry of Labor - 2025 Wage Assessment',
      infrastructure: 'World Bank Global Infrastructure Report 2025',
      politicalStability: 'World Bank Worldwide Governance Indicators 2025',
      logistics: 'Global Logistics Performance Index 2025',
      timeToMarket: 'Digital Maritime Trade Platform - Q1 2025',
      taxRate: 'USITC HTS 2025 - Chapter 61-63 Textile Articles',
      workforceStats: 'Asia Garment Hub 2025'
    },
    lastUpdated: {
      laborCost: '2025-03',
      infrastructure: '2025-01',
      politicalStability: '2025-01',
      logistics: '2025-02',
      timeToMarket: '2025-03',
      taxRate: '2025-01',
      workforceStats: '2025-03'
    }
  },
  {
    id: 'south-korea',
    name: 'South Korea',
    factoryCount: 44931,
    workerCount: 268918,
    laborCost: 65.00,
    infrastructureScore: 89,
    politicalStabilityScore: 78,
    logisticsScore: 88,
    timeToMarket: 20,
    taxRate: 16.5,
    tradeAgreements: ['RCEP', 'Korea-US FTA', 'Korea-EU FTA'],
    dataSources: {
      laborCost: 'South Korea Ministry of Employment and Labor - 2025 Wage Survey',
      infrastructure: 'World Bank Global Infrastructure Report 2025',
      politicalStability: 'World Bank Worldwide Governance Indicators 2025',
      logistics: 'Global Logistics Performance Index 2025',
      timeToMarket: 'Digital Maritime Trade Platform - Q1 2025',
      taxRate: 'USITC HTS 2025 - Chapter 61-63 Textile Articles',
      workforceStats: 'Asia Garment Hub 2025'
    },
    lastUpdated: {
      laborCost: '2025-03',
      infrastructure: '2025-01',
      politicalStability: '2025-01',
      logistics: '2025-02',
      timeToMarket: '2025-03',
      taxRate: '2025-01',
      workforceStats: '2025-03'
    }
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    factoryCount: 3800,
    workerCount: 2700000,
    laborCost: 6.80,
    infrastructureScore: 72,
    politicalStabilityScore: 64,
    logisticsScore: 77,
    timeToMarket: 25,
    taxRate: 16.5,
    tradeAgreements: ['RCEP', 'CPTPP', 'ASEAN', 'EVFTA'],
    dataSources: {
      laborCost: 'Vietnam National Wage Council - 2025 Regional Minimum Wage Decree',
      infrastructure: 'World Bank Global Infrastructure Report 2025',
      politicalStability: 'World Bank Worldwide Governance Indicators 2025',
      logistics: 'Global Logistics Performance Index 2025',
      timeToMarket: 'Digital Maritime Trade Platform - Q1 2025',
      taxRate: 'USITC HTS 2025 - Chapter 61-63 Textile Articles',
      workforceStats: 'Asia Garment Hub 2025'
    },
    lastUpdated: {
      laborCost: '2025-03',
      infrastructure: '2025-01',
      politicalStability: '2025-01',
      logistics: '2025-02',
      timeToMarket: '2025-03',
      taxRate: '2025-01',
      workforceStats: '2025-03'
    }
  },
  {
    id: 'egypt',
    name: 'Egypt',
    factoryCount: 2500,
    workerCount: 1500000,
    laborCost: 5.90,
    infrastructureScore: 62,
    politicalStabilityScore: 48,
    logisticsScore: 65,
    timeToMarket: 23,
    taxRate: 16.6,
    tradeAgreements: ['COMESA', 'GAFTA', 'Egypt-EU Association Agreement'],
    dataSources: {
      laborCost: 'Egypt Ministry of Manpower - 2025 Labor Law Updates',
      infrastructure: 'World Bank Global Infrastructure Report 2025',
      politicalStability: 'World Bank Worldwide Governance Indicators 2025',
      logistics: 'Global Logistics Performance Index 2025',
      timeToMarket: 'Digital Maritime Trade Platform - Q1 2025',
      taxRate: 'USITC HTS 2025 - Chapter 61-63 Textile Articles',
      workforceStats: 'Asia Garment Hub 2025'
    },
    lastUpdated: {
      laborCost: '2025-03',
      infrastructure: '2025-01',
      politicalStability: '2025-01',
      logistics: '2025-02',
      timeToMarket: '2025-03',
      taxRate: '2025-01',
      workforceStats: '2025-03'
    }
  },
  {
    id: 'cambodia',
    name: 'Cambodia',
    factoryCount: 1332,
    workerCount: 833100,
    laborCost: 5.20,
    infrastructureScore: 58,
    politicalStabilityScore: 52,
    logisticsScore: 64,
    timeToMarket: 29,
    taxRate: 16.5,
    tradeAgreements: ['RCEP', 'ASEAN', 'Cambodia-China FTA'],
    dataSources: {
      laborCost: 'Cambodia Ministry of Labour - 2025 Minimum Wage Notice',
      infrastructure: 'World Bank Global Infrastructure Report 2025',
      politicalStability: 'World Bank Worldwide Governance Indicators 2025',
      logistics: 'Global Logistics Performance Index 2025',
      timeToMarket: 'Digital Maritime Trade Platform - Q1 2025',
      taxRate: 'USITC HTS 2025 - Chapter 61-63 Textile Articles',
      workforceStats: 'Asia Garment Hub 2025'
    },
    lastUpdated: {
      laborCost: '2025-03',
      infrastructure: '2025-01',
      politicalStability: '2025-01',
      logistics: '2025-02',
      timeToMarket: '2025-03',
      taxRate: '2025-01',
      workforceStats: '2025-03'
    }
  },
  {
    id: 'tajikistan',
    name: 'Tajikistan',
    factoryCount: 95,
    workerCount: 14200,
    laborCost: 3.80,
    infrastructureScore: 48,
    politicalStabilityScore: 42,
    logisticsScore: 54,
    timeToMarket: 35,
    taxRate: 16.9,
    tradeAgreements: ['CIS FTA', 'Tajikistan-Turkey FTA'],
    dataSources: {
      laborCost: 'Tajikistan Ministry of Labor - 2025 Wage Regulations',
      infrastructure: 'World Bank Global Infrastructure Report 2025',
      politicalStability: 'World Bank Worldwide Governance Indicators 2025',
      logistics: 'Global Logistics Performance Index 2025',
      timeToMarket: 'Digital Maritime Trade Platform - Q1 2025',
      taxRate: 'USITC HTS 2025 - Chapter 61-63 Textile Articles',
      workforceStats: 'Asia Garment Hub 2025'
    },
    lastUpdated: {
      laborCost: '2025-03',
      infrastructure: '2025-01',
      politicalStability: '2025-01',
      logistics: '2025-02',
      timeToMarket: '2025-03',
      taxRate: '2025-01',
      workforceStats: '2025-03'
    }
  },
  {
    id: 'china',
    name: 'China',
    factoryCount: 322000,
    workerCount: 7829000,
    laborCost: 14.80,
    infrastructureScore: 85,
    politicalStabilityScore: 65,
    logisticsScore: 89,
    timeToMarket: 21,
    taxRate: 27.5,
    tradeAgreements: ['RCEP', 'China-ASEAN FTA', 'China-New Zealand FTA'],
    dataSources: {
      laborCost: 'China Ministry of Human Resources - 2025 Provincial Wage Guidelines',
      infrastructure: 'World Bank Global Infrastructure Report 2025',
      politicalStability: 'World Bank Worldwide Governance Indicators 2025',
      logistics: 'Global Logistics Performance Index 2025',
      timeToMarket: 'Digital Maritime Trade Platform - Q1 2025',
      taxRate: 'USITC HTS 2025 - Chapter 61-63 + Section 301 Tariffs',
      workforceStats: 'Asia Garment Hub 2025'
    },
    lastUpdated: {
      laborCost: '2025-03',
      infrastructure: '2025-01',
      politicalStability: '2025-01',
      logistics: '2025-02',
      timeToMarket: '2025-03',
      taxRate: '2025-01',
      workforceStats: '2025-03'
    }
  },
  {
    id: 'pakistan',
    name: 'Pakistan',
    factoryCount: 10000,
    workerCount: 15000000,
    laborCost: 6.00,
    infrastructureScore: 58,
    politicalStabilityScore: 42,
    logisticsScore: 65,
    timeToMarket: 32,
    taxRate: 16.9,
    tradeAgreements: ['SAFTA', 'Pakistan-China FTA', 'Pakistan-Malaysia FTA'],
    dataSources: {
      laborCost: 'Pakistan Minimum Wages Board - 2025 Wage Review',
      infrastructure: 'World Bank Global Infrastructure Report 2025',
      politicalStability: 'World Bank Worldwide Governance Indicators 2025',
      logistics: 'Global Logistics Performance Index 2025',
      timeToMarket: 'Digital Maritime Trade Platform - Q1 2025',
      taxRate: 'USITC HTS 2025 - Chapter 61-63 Textile Articles',
      workforceStats: 'Asia Garment Hub 2025'
    },
    lastUpdated: {
      laborCost: '2025-03',
      infrastructure: '2025-01',
      politicalStability: '2025-01',
      logistics: '2025-02',
      timeToMarket: '2025-03',
      taxRate: '2025-01',
      workforceStats: '2025-03'
    }
  },
  {
    id: 'myanmar',
    name: 'Myanmar',
    factoryCount: 530,
    workerCount: 500000,
    laborCost: 3.60,
    infrastructureScore: 52,
    politicalStabilityScore: 38,
    logisticsScore: 58,
    timeToMarket: 31,
    taxRate: 16.7,
    tradeAgreements: ['RCEP', 'ASEAN'],
    dataSources: {
      laborCost: 'Myanmar Ministry of Labour - 2025 Minimum Wage Notification',
      infrastructure: 'World Bank Global Infrastructure Report 2025',
      politicalStability: 'World Bank Worldwide Governance Indicators 2025',
      logistics: 'Global Logistics Performance Index 2025',
      timeToMarket: 'Digital Maritime Trade Platform - Q1 2025',
      taxRate: 'USITC HTS 2025 - Chapter 61-63 Textile Articles',
      workforceStats: 'Asia Garment Hub 2025'
    },
    lastUpdated: {
      laborCost: '2025-03',
      infrastructure: '2025-01',
      politicalStability: '2025-01',
      logistics: '2025-02',
      timeToMarket: '2025-03',
      taxRate: '2025-01',
      workforceStats: '2025-03'
    }
  },
  {
    id: 'turkey',
    name: 'Turkey',
    factoryCount: 59000,
    workerCount: 1500000,
    laborCost: 17.20,
    infrastructureScore: 75,
    politicalStabilityScore: 58,
    logisticsScore: 78,
    timeToMarket: 19,
    taxRate: 16.5,
    tradeAgreements: ['Turkey-EU Customs Union', 'Turkey-EFTA', 'Turkey-Malaysia FTA'],
    dataSources: {
      laborCost: 'Turkey Ministry of Labor - 2025 Minimum Wage Commission',
      infrastructure: 'World Bank Global Infrastructure Report 2025',
      politicalStability: 'World Bank Worldwide Governance Indicators 2025',
      logistics: 'Global Logistics Performance Index 2025',
      timeToMarket: 'Digital Maritime Trade Platform - Q1 2025',
      taxRate: 'USITC HTS 2025 - Chapter 61-63 Textile Articles',
      workforceStats: 'Asia Garment Hub 2025'
    },
    lastUpdated: {
      laborCost: '2025-03',
      infrastructure: '2025-01',
      politicalStability: '2025-01',
      logistics: '2025-02',
      timeToMarket: '2025-03',
      taxRate: '2025-01',
      workforceStats: '2025-03'
    }
  },
  {
    id: 'bulgaria',
    name: 'Bulgaria',
    factoryCount: 3653,
    workerCount: 100000,
    laborCost: 22.50,
    infrastructureScore: 72,
    politicalStabilityScore: 65,
    logisticsScore: 74,
    timeToMarket: 18,
    taxRate: 16.2,
    tradeAgreements: ['EU Single Market', 'EU FTAs', 'CETA'],
    dataSources: {
      laborCost: 'Bulgaria Ministry of Labor - 2025 Minimum Wage Decree',
      infrastructure: 'World Bank Global Infrastructure Report 2025',
      politicalStability: 'World Bank Worldwide Governance Indicators 2025',
      logistics: 'Global Logistics Performance Index 2025',
      timeToMarket: 'Digital Maritime Trade Platform - Q1 2025',
      taxRate: 'USITC HTS 2025 - Chapter 61-63 Textile Articles',
      workforceStats: 'Asia Garment Hub 2025'
    },
    lastUpdated: {
      laborCost: '2025-03',
      infrastructure: '2025-01',
      politicalStability: '2025-01',
      logistics: '2025-02',
      timeToMarket: '2025-03',
      taxRate: '2025-01',
      workforceStats: '2025-03'
    }
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    factoryCount: 206,
    workerCount: 5600,
    laborCost: 120.00,
    infrastructureScore: 94,
    politicalStabilityScore: 92,
    logisticsScore: 92,
    timeToMarket: 15,
    taxRate: 15.8,
    tradeAgreements: ['EFTA', 'Switzerland-EU Bilateral Agreements', 'Switzerland-China FTA'],
    dataSources: {
      laborCost: 'Switzerland State Secretariat for Economic Affairs - 2025 Wage Survey',
      infrastructure: 'World Bank Global Infrastructure Report 2025',
      politicalStability: 'World Bank Worldwide Governance Indicators 2025',
      logistics: 'Global Logistics Performance Index 2025',
      timeToMarket: 'Digital Maritime Trade Platform - Q1 2025',
      taxRate: 'USITC HTS 2025 - Chapter 61-63 Textile Articles',
      workforceStats: 'Asia Garment Hub 2025'
    },
    lastUpdated: {
      laborCost: '2025-03',
      infrastructure: '2025-01',
      politicalStability: '2025-01',
      logistics: '2025-02',
      timeToMarket: '2025-03',
      taxRate: '2025-01',
      workforceStats: '2025-03'
    }
  }
];
