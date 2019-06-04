import Hapi from 'hapi';
const  Routes = require('./routes')
const knex = require('./knex');
const server = new Hapi.Server({
    port: 1500,
    routes: {
        cors: {
            origin: ['*']
        }
    }
});


    server.route(Routes.endpoints);
//     {
//     method: 'GET',
//     path: '/hello',
//     handler: (request, reply) => {
//         return 'Hello World!';
//     }

// }, 
// {
//     method: 'GET',
//     path: '/helloworld',
//     handler: async (request, reply) => {
//         let reply1 = {};
//         await knex('appointments').select().then((results) => {
//             console.log('hdfgsjk');
//             reply1 = {
//                 dataCount: results.length,
//                 data: results,
//             };

//         }).catch((err) => {
//             return 'Error while adding the data'
//         });
//         return reply1;
//     }

server.start(err => {

    if (err) {

        // Fancy error handling here
        console.error('Error was handled!');
        console.error(err);

    }

    console.log(`Server started at ${ server.info.uri }`);

});