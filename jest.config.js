module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/styles/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/config.ts'],
  modulePaths: ['<rootDir>/src', '<rootDir>/.jest'],
}
