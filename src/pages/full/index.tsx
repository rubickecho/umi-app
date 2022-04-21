import React from 'react';

interface IState {
	name: string;
	age: number;
}

interface IProps {
	name: string;
	age?: number;
	sex?: number;
	id: number;
}

class FullPage extends React.Component<IProps, IState> {
	state = { name: '', age: 0 };

	constructor(props: IProps) {
		super(props);

		// !!! DONT'T DO THIS !!!
		// https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
		this.state = { name: props.name, age: props.age ? props.age : 0 };
	}

	componentDidMount() {
		console.log('component did mount');
	}

	componentWillUnmount() {
		console.log('component did unmount');
	}

	render() {
		return (
			<div>
				<h1>Full Page</h1>
				<p>{this.props.id}</p>
				<p>{this.state.name}</p>
				<p>{this.state.age}</p>
			</div>
		);
	}
}

// FullPage.defaultProps = {
// 	name: 'Tom',
// 	age: 18
// }

export default FullPage;
