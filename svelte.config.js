import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],

  kit: {
    adapter: adapter(),


  },

  package: {
    dir: 'client',
    emitTypes: true,
  },
};

export default config;
