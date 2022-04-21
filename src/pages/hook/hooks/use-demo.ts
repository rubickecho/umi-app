import { useState, useEffect } from 'react';

function useDemo() {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		console.log('useEffect:', count);
	});

	return {
		count,
		handleClick,
	};
}

export default useDemo;
