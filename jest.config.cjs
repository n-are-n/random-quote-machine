module.exports = {
    collectCoverage: true,
    testMatch: ['**/src/__tests__/*.test.js'],
    collectCoverageFrom: ['src/assets/js/*.js'],
    coverageReporters: [ 'text', 'text-summary', 'json', 'html'],
    coverageThreshold: {
        global: {
            lines: 100,
            branches: 100,
            functions: 100,
            statements: 100
        }
    }
}