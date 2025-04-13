import React from "react";
import Child from "./Child.jsx";

const Parent = () => {
	return (
		<div>
			<h1>Parent Component</h1>
			<Child message="Hello from Parent!" />
		</div>
	);
};

export default Parent;
