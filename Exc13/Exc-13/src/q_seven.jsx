import { useState } from "react";
import "./App.css";

function C7() {
	const [number, setNumber] = useState("");
	const [isPrime, setIsPrime] = useState(null);

	const checkPrime = (num) => {
		if (num < 2) return false;
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) return false;
		}
		return true;
	};

	const handleChange = (e) => {
		const value = e.target.value;
		setNumber(value);

		if (value === "" || isNaN(value)) {
			setIsPrime(null);
			return;
		}

		setIsPrime(checkPrime(Number(value)));
	};

	return (
		<>
			<label htmlFor="num">Enter a Number</label> <br />
			<input id="num" type="text" value={number} onChange={handleChange} />
			<p>
				{isPrime === null
					? ""
					: isPrime
					? "It's a Prime Number!"
					: "Not a Prime Number"}
			</p>
		</>
	);
}

export default C7;
