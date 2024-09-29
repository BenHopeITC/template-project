'use strict';

const Hapi = require('@hapi/hapi');

const server = Hapi.server({
	port: 3000,
	host: 'localhost'
});

server.route({
	method: 'GET',
	path: '/',
	handler: (request, h) => {
		console.log(`CONSOLE: Server received call using '${request.method}' method. Sonar shouldn't like this!`);
		return h.response('Tutorial: Testing Conflicts 14!');
	}
});

server.route({
	method: 'GET',
	path: '/fail',
	handler: (request, h) => {
		return h.response({ message: 'Internal Server Error' }).code(500);
	}
});

server.route({
	method: 'GET',
	path: '/notcoveredbytests',
	handler: (request, h) => {
		return h.response('Tutorial: Testing SonarCloud 1!');
	}
});

const init = async () => {
	await server.initialize();
	return server;
};

const start = async () => {
	await server.start();
	console.log(`Server running at: ${server.info.uri}`);
	return server;
};

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

// Export the functions so they can be used in other files (like tests)
module.exports = {
    init,
    start
};

// Only start the server if this file is executed directly, not when it's required (like in tests)
if (require.main === module) {
	start()
}