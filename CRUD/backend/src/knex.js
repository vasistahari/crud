module.exports = require('knex')({
	client: 'mysql',
	connection: {
		host: '192.168.0.101',
		user: 'root',
		password: 'EnMontoR',
		database: 'demo',
		charset: 'utf8'
	}
});
