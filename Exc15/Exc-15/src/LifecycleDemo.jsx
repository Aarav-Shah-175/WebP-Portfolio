import React, { Component } from "react";

class LifecycleDemo extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
		console.log("Constructor: Component is initializing");
	}

	componentDidMount() {
		console.log("componentDidMount: Component has mounted");
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			console.log("componentDidUpdate: State has updated");
		}
	}

	componentWillUnmount() {
		console.log("componentWillUnmount: Component is about to be unmounted");
	}

	incrementCount = () => {
		this.setState((prevState) => ({ count: prevState.count + 1 }));
	};

	render() {
		return (
			<div>
				<h2>Lifecycle Demo</h2>
				<p>Count: {this.state.count}</p>
				<button onClick={this.incrementCount}>Increment Count</button>
			</div>
		);
	}
}
export default LifecycleDemo;
