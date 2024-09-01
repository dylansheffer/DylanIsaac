import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess({
			postcss: true,
		}),
		mdsvex({
			extensions: ['.md'],
		}),
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
