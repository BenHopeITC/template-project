'use strict'

const Hapi = require('@hapi/hapi')
const Logger = require('./lib/logger')

const init = async () => {
	const server = Hapi.server({
		port: 3000,
		host: 'localhost'
	})

	server.route({
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			return 'Tutorial: Getting Started 14!'
		}
	})

	await server.start()
	// debugger
	// console.log('CONSOLE: Server running on %s', server.info.uri)
	Logger().info('LOGGER: Server running on %s', server.info.uri)
	Logger().trace('LOGGER TRACE: Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
	console.log(err)
	process.exit(1)
})

init()
