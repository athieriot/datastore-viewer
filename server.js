'use strict';

const Hapi = require('hapi');

if (!process.env['DATASTORE_EMULATOR_HOST']) {
    process.env['DATASTORE_EMULATOR_HOST'] = 'localhost:8432';
}

const server = Hapi.server({ port: 3001, address: "0.0.0.0", host: "localhost" });
const Datastore = require('@google-cloud/datastore');

server.route({
  method: 'GET',
  path: '/api/namespaces',
  handler: function (request, reply) {

    return Datastore({projectId: 'default'})
      .createQuery('__namespace__').select('__key__').run()
      .then(entities => entities[0].map(e => e[Datastore.KEY].name).map(e => !e ? "default" : e))
      .catch((err) => err);
  }
});

server.route({
  method: 'GET',
  path: '/api/namespaces/{namespace}/kinds',
  handler: function (request, reply) {

    return toNamespaceQuery(request.params.namespace, "__kind__").select('__key__').run()
      .then(entities => entities[0].map(e => e[Datastore.KEY].name))
      .catch((err) => err);
  }
});

server.route({
  method: 'GET',
  path: '/api/namespaces/{namespace}/kinds/{kind}',
  handler: function (request, reply) {

    return toNamespaceQuery(request.params.namespace, request.params.kind).run()
      .then(entities => {
        return entities[0].map(e => {
          e["key"] = e[Datastore.KEY].name;
          return e;
        });
      })
      .catch((err) => err);
  }
});

function toNamespaceQuery(namespace, kind) {
  if (namespace === "default") {
    return Datastore({projectId: 'default'}).createQuery(kind);
  } else {
    return Datastore({projectId: 'default'}).createQuery(namespace, kind);
  }

}

server.route({
  method: 'GET',
  path: '/api/populate/{namespace}/{kind}/{id}',
  handler: function (request, reply) {
    // Instantiates a client
    const datastore = Datastore({
      projectId: "default"
    });

    let namespace = request.params.namespace;
    let kind = request.params.kind;
    let name = request.params.id;
    let taskKey;

    if (namespace === "default") {
      taskKey = datastore.key([kind, name]);
    } else {
      taskKey = datastore.key({
        namespace: namespace,
        path: [kind, name]
      });
    }

    const task = {
      key: taskKey,
      data: {
        description: 'Buy milk',
        content: {
          email: "ksdjfkdj@gmail.com",
          phone: "015467874"
        }
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
