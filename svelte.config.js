import adapter from "@sveltejs/adapter-static"; 

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs',
		}),
	}
};

export default config;
