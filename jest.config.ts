module.exports = {
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
        '!<rootDir>/src/index.ts',
        '!<rootDir>/src/*.spec.ts'
    ],
    coverageDirectory: 'coverage',
    coverageProvider: 'babel',
    testMatch: ['**/*.spec.ts'],
    roots: ['<rootDir>/src'],
    transform: {
        '\\.ts$': 'ts-jest'
    },
    clearMocks: true,
    reporters: [
        'default',
        [
            'jest-sonar',
            {
                outputDirectory: 'report',
                outputName: 'sonar-report.xml'
            }
        ]
    ]
}