import Fastify from "fastify";
import type { AppSpecs } from "@customTypes";
import cors from "@fastify/cors";

const app = async () => {
	const app = Fastify();

	app.register(cors, {
		origin: "*",
	});

	app.get("/", (_, reply) => {
		reply.send("change me to see updates, fastify!~");
	});

	app.get("/appSpecs", (): AppSpecs => {
		return {
			id: "0.0.1",
			name: "Neighbook",
		};
	});

	if (import.meta.env.PROD)
		app.listen({
			port: 3000,
			host: "0.0.0.0",
		});

	return app;
};

export const viteNodeApp = app();
