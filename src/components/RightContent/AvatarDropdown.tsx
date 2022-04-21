import React, { useCallback } from 'react';
import {
	LogoutOutlined,
	SettingOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { Avatar, Menu, Spin, message } from 'antd';
import { history, useModel } from 'umi';
import { stringify } from 'querystring';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import type { MenuInfo } from 'rc-menu/lib/interface';

export type GlobalHeaderRightProps = {
	menu?: boolean;
};

/**
 * 退出登录，并且将当前的 url 保存
 */
const loginOut = async () => {
	// TODO FETCH API
	// const status = true
	// if (status) {
	// 	localStorage.removeItem('token');
	// 	message.success({
	// 		content: '退出成功',
	// 		onClose() {
	// 			history.push('/login');
	// 		}
	// 	});
	// } else {
	// 	message.error('退出失败');
	// }
	const { query = {}, search, pathname } = history.location;
	const { redirect } = query;
	// Note: There may be security issues, please note
	if (window.location.pathname !== '/login' && !redirect) {
		localStorage.removeItem('token');
		history.replace({
			pathname: '/login',
			search: stringify({
				redirect: pathname + search,
			}),
		});
	}
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
	const { initialState, setInitialState } = useModel('@@initialState');

	const onMenuClick = useCallback(
		(event: MenuInfo) => {
			const { key } = event;
			if (key === 'logout') {
				setInitialState((s: any) => ({ ...s, currentUser: undefined }));
				loginOut();
				return;
			}
			history.push(`/account/${key}`);
		},
		[setInitialState],
	);

	const loading = (
		<span className={`${styles.action} ${styles.account}`}>
			<Spin
				size="small"
				style={{
					marginLeft: 8,
					marginRight: 8,
				}}
			/>
		</span>
	);

	if (!initialState) {
		return loading;
	}

	const { currentUser } = initialState;

	if (!currentUser || !currentUser.name) {
		return loading;
	}

	const menuHeaderDropdown = (
		<Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
			{menu && (
				<Menu.Item key="center">
					<UserOutlined />
					个人中心
				</Menu.Item>
			)}
			{menu && (
				<Menu.Item key="settings">
					<SettingOutlined />
					个人设置
				</Menu.Item>
			)}
			{menu && <Menu.Divider />}

			<Menu.Item key="logout">
				<LogoutOutlined />
				退出登录
			</Menu.Item>
		</Menu>
	);
	return (
		<HeaderDropdown overlay={menuHeaderDropdown}>
			<span className={`${styles.action} ${styles.account}`}>
				<Avatar
					size="small"
					className={styles.avatar}
					src={
						'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
					}
					alt="avatar"
				/>
				<span className={`${styles.name} anticon`}>
					{currentUser.name}
				</span>
			</span>
		</HeaderDropdown>
	);
};

export default AvatarDropdown;
