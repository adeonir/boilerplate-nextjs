const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJeestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/config.ts'],
  modulePaths: ['<rootDir>/src', '<rootDir>/.jest'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/**/mock.ts',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/services/**/*.ts',
    '!src/types/**/*.ts',
  ],
}

module.exports = createJestConfig(customJeestConfig)
