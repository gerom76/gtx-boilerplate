import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
export default config;
