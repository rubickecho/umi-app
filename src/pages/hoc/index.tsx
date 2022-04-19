import React from 'react';
import HocComponent from './hoc';

@HocComponent
class HocPage extends React.Component {
	render() {
		// const NewComponent = HocComponent(<h1>这是一个高阶组件</h1>); // !!! 不要在 render 中调用 HOC
		return (
			<div>
				<h1>这是一个高阶组件</h1>
			</div>
		)
	}
}

export default HocPage;
