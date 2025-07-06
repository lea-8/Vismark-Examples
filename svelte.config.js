import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';

import remarkFootnotes from "remark-footnotes";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
	// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
	// See https://svelte.dev/docs/kit/adapters for more information about adapters.
	adapter: adapter() },
	preprocess: [mdsvex({
		extensions: ['.md', '.svx', '.vismd'],
		remarkPlugins: [remarkFootnotes],
	})],
	extensions: ['.svelte', '.md', '.svx', '.vismd'],
};

export default config;
