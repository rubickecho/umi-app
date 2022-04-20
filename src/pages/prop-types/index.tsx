import React from 'react';
import PropTypesWidget from './prop-types-widget';

class PropTypesPage extends React.Component {
	render() {
		return (
			<div>
				<h1>PropTypes</h1>
				<PropTypesWidget name="Tom" age={20}></PropTypesWidget>
			</div>
		);
	}
}

export default PropTypesPage;
