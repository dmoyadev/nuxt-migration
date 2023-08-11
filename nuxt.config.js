import fs from 'fs';
import { parse } from 'yaml';
import { defineNuxtConfig } from 'nuxt/config';

function readYamlFile(filePath) {
	const file = fs.readFileSync(filePath, 'utf8');

	return parse(file);
}

export default defineNuxtConfig({
	layoutTransition: {
		// Is "layout" by default
		name: 'fade',
		mode: 'out-in'
	},

	pageTransition: {
		// Is "page" by default
		name: 'slide-fade',
		mode: 'out-in'
	},

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: [
		'~/components/base/'
	],

	vite: {
		// Add scss files
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "~/assets/scss/all.scss";'
				}
			}
		}
	},

	// TODO add doc with link
	modules: [
		'@nuxtjs/tailwindcss',
		['@nuxtjs/eslint-module', { fix: true }],
		'@vite-pwa/nuxt',
		'@nuxtjs/i18n',
		'@pinia/nuxt',
		'@element-plus/nuxt'
	],

	i18n: {
		locales: ['en', 'vi'],
		defaultLocale: 'vi',
		strategy: 'no_prefix',
		messages: {
			en: readYamlFile('./locales/en.yaml'),
			vi: readYamlFile('./locales/vi.yaml')
		}
	},

	watch: [
		'locales',
		'*.config.js',
		'*.config.ts',
		'.env',
		'.nuxtignore'
	],

	// PWA module configuration: https://vite-pwa-org.netlify.app/frameworks/nuxt.html
	pwa: {
		manifest: {
			lang: 'en'
		}
	},

	/*
	 ** Server Middleware
	 */
	serverMiddleware: [{ path: '/api/v1', handler: '~/server' }],

	runtimeConfig: {
		SERVER_API_URL: 'http://localhost:3000/secret-api/v1',

		public: {
			API_URL: 'http://localhost:3000/api/v1'
		}
	}
});
