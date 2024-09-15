module.exports = {
	testEnvironment: 'node',
	moduleDirectories: ['node_modules', '<rootDir>'],
	testRegex: ['src/.*.test.js'],
	collectCoverage: true,
	coverageReporters: ['lcov', 'text'],
	coverageDirectory: 'coverage',
	collectCoverageFrom: ['src/**/*.js']
};
