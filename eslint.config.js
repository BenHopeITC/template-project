module.exports = [
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest', // ECMAScript version (latest)
			sourceType: 'module', // Use ES Modules (can be 'script' for non-modules)
			globals: {
				// Enabling browser and Node.js global variables
				window: 'readonly', // Browser global variable
				document: 'readonly', // Browser global variable
				process: 'readonly', // Node.js global variable
				require: 'readonly' // Node.js global variable
			}
		},
		rules: {
			semi: ['error', 'always'], // Enforce semicolons
			quotes: ['error', 'single'], // Enforce single quotes
			'no-unused-vars': 'warn', // Warn on unused variables
			eqeqeq: 'error' // Enforce strict equality (===)
		}
	}
];
