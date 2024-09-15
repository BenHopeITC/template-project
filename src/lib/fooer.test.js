const fooer = require('./foo');

describe('logger tests', () => {
	it('get an instance', () => {
		const fooed = fooer();
		expect(fooed).toBe(`You've been fooed`);
	});
});
