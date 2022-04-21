import { PageLoading } from '@ant-design/pro-layout';
import { history } from 'umi';

import {
	BasicLayoutProps,
	Settings as LayoutSettings,
} from '@ant-design/pro-layout';

import RightContent from '@/components/RightContent';

const loginPath = '/login';

export const initialStateConfig = {
	loading: <PageLoading />,
};

export const layout = ({
	initialState,
}: {
	initialState: {
		settings?: LayoutSettings;
		currentUser?: { id: number; name: string } | null;
	};
}): BasicLayoutProps => {
	return {
		rightContentRender: () => <RightContent />,
		onPageChange: () => {
			const token = localStorage.getItem('token');
			const { currentUser } = initialState;
			const { location } = history;
			// 如果没有登录，重定向到 login
			if (!currentUser && location.pathname !== loginPath && !token) {
				history.push(loginPath);
			}
		},
		menuHeaderRender: undefined,
		...initialState?.settings,
	};
};

export async function getInitialState() {
	const fetchUserInfo = async (debug: boolean) => {
		try {
			if (debug) {
				throw new Error('debug');
			}
			// TODO 获取用户信息
			return { id: 1, name: 'jack' };
		} catch (error) {
			history.push(loginPath);
		}
	};

	if (history.location.pathname !== loginPath) {
		// TODO
		const currentUser = await fetchUserInfo(false);
		console.log('currentUser:', currentUser);
		return { fetchUserInfo, currentUser, settings: {} };
	}

	return {
		fetchUserInfo,
		currentUser: null,
		settings: { navTheme: 'dark', layout: 'left' },
	};
}
