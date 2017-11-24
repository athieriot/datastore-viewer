'use strict';

const Hapi = require('hapi');

const server = Hapi.server({ port: 3001, host: 'localhost' });
const Datastore = require('@google-cloud/datastore');

server.route({
  method: 'GET',
  path: '/api/namespaces',
  handler: function (request, reply) {
    process.env['DATASTORE_EMULATOR_HOST'] = 'localhost:8432';

    return Datastore({projectId: 'default'})
      .createQuery('__namespace__').select('__key__').run()
      .then(entities => entities[0].map(e => e[Datastore.KEY].name))
      .catch((err) => err);
  }
});

server.route({
  method: 'GET',
  path: '/api/namespaces/{namespace}/kinds',
  handler: function (request, reply) {
    process.env['DATASTORE_EMULATOR_HOST'] = 'localhost:8432';

    return Datastore({projectId: 'default'})
      .createQuery(request.params.namespace, '__kind__').select('__key__').run()
      .then(entities => entities[0].map(e => e[Datastore.KEY].name))
      .catch((err) => err);
  }
});

server.route({
  method: 'GET',
  path: '/api/populate',
  handler: function (request, reply) {
    // Instantiates a client
    const datastore = Datastore({
      projectId: "default"
    });

    const kind = 'Task';
    const name = 'sampletask1';
    const taskKey = datastore.key({
      namespace: 'stuff',
      path: [kind, name]
    });

    const task = {
      key: taskKey,
      data: {
        description: 'Buy milk'
      }
    };

    return datastore.save(task)
      .then(() => {
        return `Saved ${task.key.name}: ${task.data.description}`;
      })
      .catch((err) => {
        return {'ERROR': err};
      });
  }
});

server.start().then((err) => {
  if (err) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});
