import { defineConfig } from 'umi';

export default defineConfig({
	nodeModulesTransform: {
		type: 'none',
	},
	layout: {},
	routes: [
		{ path: '/', component: '@/pages/index' },
		{ patj: '/login', component: '@/pages/common/login/index.tsx'}
	],
	fastRefresh: {},
	extraPostCSSPlugins: [
		require('postcss-import'),
		require('tailwindcss')
	]
});
