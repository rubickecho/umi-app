import { defineConfig, history } from 'umi';

export default defineConfig({
	nodeModulesTransform: {
		type: 'none',
	},
	layout: {
		name: 'UMI DEMO',
		logout: () => {
			//  TODO
			history.push('/login');
		},
	},
	routes: [
		{
			path: '/',
			menu: { name: '首页', icon: 'github' },
			component: '@/pages/index',
		},
		{
			path: '/login',
			layout: false,
			component: '@/pages/common/login/index.tsx',
		},
		{
			path: '/fragments',
			menu: { name: 'Fragments', icon: 'github' },
			component: '@/pages/fragments/index.tsx',
		},
		{
			path: '/hoc',
			menu: { name: 'React HOC', icon: 'github' },
			component: '@/pages/hoc/index.tsx',
		},
		{
			path: '/prop-types',
			menu: { name: 'React PropTypes', icon: 'github' },
			component: '@/pages/prop-types/index.tsx',
		},
		{
			path: '/full',
			menu: { name: '完整 DEMO', icon: 'github' },
			component: '@/pages/full/index.tsx',
		},
		{
			path: '/hook',
			menu: { name: 'React Hook', icon: 'github' },
			component: '@/pages/hook/index.tsx',
		},
	],
	fastRefresh: {},
	extraPostCSSPlugins: [require('postcss-import'), require('tailwindcss')],
});
