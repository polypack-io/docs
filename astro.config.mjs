// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://polypack.io',
	integrations: [
		starlight({
			title: 'Polypack',
			social: {
				github: 'https://github.com/polypack-io/polypack',
				discord: 'https://discord.gg/fweC3GnYVQ',
			},
			editLink: {
				baseUrl: 'https://github.com/polypack-io/docs/edit/main/',
			},
			sidebar: [
				{
					label: 'Docs',
					autogenerate: { directory: 'docs' },
				},
				{
					label: 'Registries',
					autogenerate: { directory: 'registries' },
				},
				{
					label: 'Repositories',
					autogenerate: { directory: 'repositories' },
				},
				{
					label: 'Storage',
					autogenerate: { directory: 'storage' },
				},
			],
		}),
	],
});
