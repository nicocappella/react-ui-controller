module.exports = {
    testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist'],
    moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
};
