import fastify from 'fastify';

const app = fastify();

app.get('/', async (request, reply) => {
	return { hello: 'world' };
});

export const viteNodeApp = app;
