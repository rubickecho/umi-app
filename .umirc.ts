import { defineConfig } from 'umi';

export default defineConfig({
	nodeModulesTransform: {
		type: 'none',
	},
	layout: {
		logout: () => {
			//  TODO
		}
	},
	routes: [
		{ path: '/', component: '@/pages/index' },
		{ path: '/login', component: '@/pages/common/login/index.tsx'},
		{ path: '/fragments', component: '@/pages/fragments/index.tsx'},
		{ path: '/hoc', component: '@/pages/hoc/index.tsx'},
	],
	fastRefresh: {},
	extraPostCSSPlugins: [
		require('postcss-import'),
		require('tailwindcss')
	]
});
