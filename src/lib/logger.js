const pino = require('pino')

const logger = () => {
	return pino({
		level: process.env.LOG_LEVEL || 'debug',
		formatters: {
			level: (label) => {
				return { level: label.toUpperCase() }
			}
		},
		transport: {
			target: 'pino-pretty',
			options: {
				colorize: true
			}
		}
	})
}

module.exports = logger
