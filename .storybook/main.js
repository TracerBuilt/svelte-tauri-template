module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss')
				}
			}
		}
	],
	framework: '@storybook/svelte',
	core: {
		builder: '@storybook/builder-vite'
	},
	svelteOptions: {
		preprocess: import('../svelte.config.js').preprocess
	},
	features: {
		storyStoreV7: true
	},
	webpackFinal: async (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			$lib: path.resolve(__dirname, '../src/lib'),
			$components: path.resolve(__dirname, '../src/lib/components')
		}
		return config
	}
}
