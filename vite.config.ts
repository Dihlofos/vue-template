import { fileURLToPath, URL } from 'node:url';

import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		host: 'localhost',
		port: 8080,
	},
	plugins: [
		vue(),
		Components({
			resolvers: [AntDesignVueResolver()],
			dts: true,
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/styles/index.scss";`,
			},
		},
	},
});
