import { use, useState } from "react";

import "./App.css";

function C10() {
	const [number, setNumber] = useState(0);

	const generate = () => {
		var n = Math.floor(Math.random() * 100) + 1;
		setNumber(n);
	};
	return (
		<>
			<button onClick={generate}>Generate a Random Number</button>
			<p>{number}</p>
		</>
	);
}

export default C10;
