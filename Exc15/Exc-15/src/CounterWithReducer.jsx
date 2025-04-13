import React, { useReducer } from "react";

// Reducer function
const counterReducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + 1 };
		case "DECREMENT":
			return { count: state.count - 1 };
		default:
			return state;
	}
};

const CounterWithReducer = () => {
	const [state, dispatch] = useReducer(counterReducer, { count: 0 });

	return (
		<div>
			<h2>Counter using useReducer</h2>
			<p>Count: {state.count}</p>
			<button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
			<button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
		</div>
	);
};

export default CounterWithReducer;
