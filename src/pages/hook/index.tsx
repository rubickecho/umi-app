import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import useDemo from './hooks/use-demo';
/**
 * 未使用自定义 HOOK
 * @returns {React.ReactNode}
 */
// function HookPage() {
// 	const [count, setCount] = useState(0);

// 	useEffect(() => {
// 		console.log('useEffect: ', count);
// 		return () => {
// 			console.log('useEffect unmount');
// 		};
// 	})

// 	return (
// 		<div>
// 			<h1>Hook</h1>
// 			<p>{ count }</p>
// 			<Button onClick={() => { setCount(count + 1) }}>点击+1</Button>
// 		</div>
// 	);
// }

/**
 * 使用自定义 HOOK
 * @returns
 */
function HookPage() {
	const { count, handleClick } = useDemo();
	return (
		<div>
			<h1>Hook</h1>
			<p>{count}</p>
			<Button
				onClick={() => {
					handleClick();
				}}
			>
				点击+1
			</Button>
		</div>
	);
}

// class HookPage extends React.Component {

// 	public render() {
// 		return (
// 			<div>
// 				<h1>Hook</h1>
// 			</div>
// 		);
// 	}
// }

export default HookPage;
