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
		return h.response('Tutorial: Testing 11!');
	}
});

server.route({
	method: 'GET',
	path: '/fail',
	handler: (request, h) => {
		return h.response({ message: 'Internal Server Error' }).code(500);
	}
});

exports.init = async () => {
	await server.initialize();
	return server;
};

exports.start = async () => {
	await server.start();
	console.log(`Server running at: ${server.info.uri}`);
	return server;
};

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});
