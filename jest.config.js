const nextJest = require('next/jest');
// const { pathsToModuleNameMapper } = require("ts-jest");
// const { compilerOptions } = require("./tsconfig.json");

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        // Handle module aliases (this will be automatically configured for you soon)
        '^@components/(.*)$': '<rootDir>/components/$1',
        '^@pages/(.*)$': '<rootDir>/pages/$1',
        '^@helper/(.*)$': '<rootDir>/helper/$1',
        '^@public/(.*)$': '<rootDir>/public/$1',
        '^@layout/(.*)$': '<rootDir>/layout/$1',
        '^@api/(.*)$': '<rootDir>/pages/api/$1',
        '^@mocks/(.*)$': '<rootDir>/mocks/$1',
        '^@app/(.*)$': '<rootDir>/app/$1',
        '^@features/(.*)$': '<rootDir>/features/$1',
        '^@styles/(.*)$': '<rootDir>/styles/$1',
    },
    setupFiles: ["core-js"],
    transformIgnorePatterns: ["/node_modules/(?!(DEPENDENCY_NAME)/)"],
    globals: {
        "ts-jest": {
            isolatedModules: true
        }
    },
    // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
    testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
