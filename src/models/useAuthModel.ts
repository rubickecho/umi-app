import { useState, useCallback } from 'react';
import { history } from 'umi';
import { message } from 'antd';
export interface IUseAuthModel {
	user: { id: number; account: string } | null;
	signIn: (account: string, password: string) => Promise<void>;
	signOut: (account: string, password: string) => Promise<void>;
}

export default function useAuthModel() {
	const [user, setUser] = useState<{ id: number; account: string } | null>(
		null,
	);

	const signIn = async (account: string, password: string) => {
		setUser({ account, id: 1 });
		if (account === 'admin' && password === 'admin') {
			localStorage.setItem('token', `${account}_${Date.now()}`);
			message.success({
				content: '登录成功',
				onClose() {
					/** 此方法会跳转到 redirect 参数所在的位置 */
					if (!history) return;
					const { query } = history.location;
					const { redirect } = query as { redirect: string };
					history.push(redirect || '/');
				},
			});
		} else {
			message.error('账号或密码错误');
		}
		return true;
	};

	const signOut = async () => {
		// TODO FETCH API
		const status = true;
		if (status) {
			localStorage.removeItem('token');
			message.success({
				content: '退出成功',
				onClose() {
					history.push('/login');
				},
			});
		} else {
			message.error('退出失败');
		}
		return true;
	};

	return {
		user,
		signIn,
		signOut,
	};
}
