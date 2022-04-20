import React from 'react';

function hocComponent(WrappedComponent: any) {
	return class extends React.Component {
		elRef: React.RefObject<HTMLDivElement>;
		constructor(props: { data: Array<string> }) {
			super(props);
			console.log('props:', props);
			this.elRef = React.createRef();
		}

		componentDidMount() {
			console.log('component did mount:', this.elRef);
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
					<WrappedComponent ref={this.elRef} {...this.props} />
				</div>
			);
		}
	};
}

export default hocComponent;
