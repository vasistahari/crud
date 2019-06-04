// API Server Endpoints 123
const knex = require('./knex');
exports.endpoints = [
	{
		method: 'GET',
		path: '/helloworld',
		handler: async (request, reply) => {
			let reply1 = {};
			await knex('customer')
				.select()
				.then(results => {
					console.log('DATA RETRIVED');
					reply1 = {
						dataCount: results.length,
						data: results
					};
				})
				.catch(err => {
					return 'Error while adding the data';
				});
			return reply1;
		}
	},

	{
		method: 'POST',
		path: '/editData',
		handler: async (request, reply) => {
			let reply1 = {};
			console.log(request.payload);
			const id = request.payload.id;
			const name = request.payload.name;
			const address = request.payload.address;
			const email = request.payload.email;
			const phone = request.payload.phone;
			console.log(name);
			await knex
				.raw(
					`update customer set name = '${name}', address = '${address}' , email = '${email}' , phone = '${phone}' where id = '${id}'`
				)
				.then(results => {
					console.log('editDATA');
					reply1 = {
						dataCount: results.length,
						data: results
					};
				})
				.catch(err => {
					console.log(err);
					return 'Error while adding the data';
				});
			return reply1;
		}
	},
	{
		method: 'post',
		path: '/addData',
		handler: async (request, reply) => {
			let reply1 = {};
			console.log(request.payload);
			const id = request.payload.id;
			const name = request.payload.name;
			const address = request.payload.address;
			const email = request.payload.email;
			const phone = request.payload.phone;
			console.log(address);
			await knex
				.raw(
					`INSERT INTO customer(id, name, address, email, phone) VALUES ('${id}','${name}','${address}','${email}','${phone}')`
				)
				.then(results => {
					console.log('addDATA');
					reply1 = {
						dataCount: results.length,
						data: results
					};
				})
				.catch(err => {
					console.log(err);
					return 'Error while adding the data';
				});
			return reply1;
		}
	},

	{
		method: 'post',
		path: '/deleteData',
		handler: async (request, reply) => {
			let reply1 = {};
			const id = request.payload;
			await knex
				.raw(`DELETE FROM customer where id = '${id}' `)
				.then(results => {
					console.log('delete success');
					reply1 = {
						dataCount: results.length,
						data: results
					};
				})

				.catch(err => {
					return 'Error while adding the data';
				});
			return reply1;
		}
	},

	//Employee Table

	{
		method: 'GET',
		path: '/employeeData',
		handler: async (request, reply) => {
			let reply1 = {};
			await knex('employees')
				.select()
				.then(results => {
					console.log('DATA RETRIVED');
					reply1 = {
						dataCount: results.length,
						data: results
					};
				})
				.catch(err => {
					return 'Error while adding the data';
				});
			return reply1;
		}
	},

	{
		method: 'POST',
		path: '/updateData',
		handler: async (request, reply) => {
			let reply1 = {};
			console.log(request.payload);
			const id = request.payload.id;
			const name = request.payload.name;
			const designation = request.payload.designation;
			const department = request.payload.department;
			const location = request.payload.location;
			const reporting_manager = request.payload.reporting_manager;
			console.log(name);   
			await knex
				.raw(
					`update employees set name = '${name}', designation = '${designation}' , department = '${department}' , location = '${location}',reporting_manager = '${reporting_manager}' where id = '${id}'`
				)
				.then(results => {
					console.log('editDATA');
					reply1 = {
						dataCount: results.length,
						data: results
					};
				})
				.catch(err => {
					console.log(err);
					return 'Error while adding the data';
				});
			return reply1;
		}
	},
	{
		method: 'post',
		path: '/add_Data',
		handler: async (request, reply) => {
			let reply1 = {};
			console.log(request.payload);
			const id = request.payload.id;
			const name = request.payload.name;
			const designation = request.payload.designation;
			const department = request.payload.department;
			const location = request.payload.location;
			const reporting_manager = request.payload.reporting_manager;
			console.log(name);
			await knex
				.raw(
					`INSERT INTO employees(name, designation, department, location,reporting_manager) VALUES ('${name}','${designation}','${department}','${location}','${reporting_manager}')`
				)
				.then(results => {
					console.log('addDATA');
					reply1 = {
						dataCount: results.length,
						data: results
					};
				})
				.catch(err => {
					console.log(err);
					return 'Error while adding the data';
				});
			return reply1;
		}
	},

	{
		method: 'post',
		path: '/deletedData',
		handler: async (request, reply) => {
			let reply1 = {};
			const id = request.payload;
			await knex
				.raw(`DELETE FROM employees where id = '${id}' `)
				.then(results => {
					console.log('delete success');
					reply1 = {
						dataCount: results.length,
						data: results
					};
				})

				.catch(err => {
					return 'Error while adding the data';
				});
			return reply1;
		}
	}
];
