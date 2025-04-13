import { useState } from "react";

function LeapYearChecker() {
	const [year, setYear] = useState("");
	const [result, setResult] = useState("");

	const checkLeapYear = () => {
		if (year === "" || isNaN(year)) {
			setResult("Please enter a valid year.");
			return;
		}
		const numYear = Number(year);
		const isLeap =
			(numYear % 4 === 0 && numYear % 100 !== 0) || numYear % 400 === 0;
		setResult(
			isLeap
				? `${numYear} is a Leap Year`
				: `${numYear} is NOT a 
Leap Year `
		);
	};

	return (
		<div>
			<h2>Leap Year Checker</h2>
			<input
				type="number"
				placeholder="Enter a year..."
				value={year}
				onChange={(e) => setYear(e.target.value)}
			/>
			<button onClick={checkLeapYear}>Check</button>
			<p>{result}</p>
		</div>
	);
}
export default LeapYearChecker;
