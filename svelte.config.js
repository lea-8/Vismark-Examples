import { vismarkConfig } from 'vismark/config';
import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-auto';
import { server } from 'typescript';

/** @type {import('@sveltejs/kit').Config} */
const config = vismarkConfig({
	kit: { // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
	// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
	// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		appDir: 'app', // Required as the default is _app	
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
});

export default config;
