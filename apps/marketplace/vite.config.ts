import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
	server: {
		port: 3002,
	},
	plugins: [
		...VitePluginNode({
			adapter: "fastify",
			appPath: "./src/main.ts",
		}),
	],
});
