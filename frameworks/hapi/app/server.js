const Hapi = require('@hapi/hapi');
const Routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    Routes.register(server);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

init();
