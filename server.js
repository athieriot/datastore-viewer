'use strict';

const Hapi = require('hapi');

const server = Hapi.server({ port: 3001, host: 'localhost' });

server.start().then((err) => {
    if (err) {
        throw err;
    }

    console.log(`Server running at: ${server.info.uri}`);
});
