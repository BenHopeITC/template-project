const Logger = require('./logger');

describe('logger tests', () => {
	it('get an instance', () => {
		const logger = Logger();
		expect(logger).not.toBeNull();
	});
});
