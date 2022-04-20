import React from 'react';
import PropTypes from 'prop-types';

interface MyProps {
	name: string;
	age?: number;
}

interface MyState {
	sex: string;
}

/**
 * Basic Prop Types
 * https://github.com/typescript-cheatsheets/react#:~:text=Basic%20Prop%20Types%20Examples
 */
class PropTypesWidget extends React.Component<MyProps, MyState> {
	state: MyState = {
		sex: '男',
	};
	count: number = 0;

	componentDidMount() {
		this.count = 1;
	}

	render() {
		const Node01 = ({ message }: { message: string }) => (
			<div>{message}</div>
		);
		return (
			<div>
				<p>{this.props.name}</p>
				<p>{this.props.age}</p>
				<Node01 message="this is node-01" />
			</div>
		);
	}
}

// PropTypesWidget.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	age: PropTypes.number
// }

export default PropTypesWidget;
