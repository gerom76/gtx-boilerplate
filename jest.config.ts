import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  verbose: true,
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  coverageReporters: ['text', 'cobertura', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
export default config;
