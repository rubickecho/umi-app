import React from "react";

function hocComponent(WrappedComponent: any) {
	return class extends React.Component {
		constructor(props: { data: Array<string> }) {
			super(props);
			console.log('props:', props)
		}

		componentDidMount() {
			console.log('component did mount');
		}

		componentDidUpdate() {
			console.log('component did update');
		}

		componentWillUnmount() {
			console.log('component will unmount');
		}

		render() {
			return (
				<div className="p-4 bg-green-300">
					<WrappedComponent {...this.props} />
				</div>
			);
		}
	}
}

export default hocComponent;
