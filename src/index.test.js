'use strict';

// const Lab = require('@hapi/lab');
// const { afterEach, beforeEach, describe, it } = (exports.lab = Lab.script());
const { expect } = require('@hapi/code');
const { init } = require('./index');

describe('GET /', () => {
	let server;

	beforeEach(async () => {
		server = await init();
	});

	afterEach(async () => {
		await server.stop();
	});

	it('responds with 200', async () => {
		const res = await server.inject({
			method: 'get',
			url: '/'
		});
		expect(res.statusCode).to.equal(200);
	});
});

describe('GET /fail', () => {
	let server;

	beforeEach(async () => {
		server = await init();
	});

	afterEach(async () => {
		await server.stop();
	});

	it('responds with 500', async () => {
		const res = await server.inject({
			// documentation says this needs @hapi/shot, but it was successful without it
			method: 'get',
			url: '/fail'
		});
		expect(res.statusCode).to.equal(500);
	});
});
