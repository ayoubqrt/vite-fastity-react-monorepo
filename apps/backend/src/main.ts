import fastify from "fastify";
import type { AppSpecs } from "@customTypes";
import cors from "@fastify/cors";

const app = fastify();

app.register(cors, {
	origin: "*",
});

app.get("/appSpecs", (): AppSpecs => {
	return {
		id: "0.0.1",
		name: "Neighbook",
	};
});

export const viteNodeApp = app;
