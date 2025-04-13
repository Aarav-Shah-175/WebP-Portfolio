import { useState } from "react";
import "./App.css";
function C8() {
	const [temperature, setTemperature] = useState("");
	const [result, setResult] = useState("");
	const tofarenheit = () => {
		if (temperature === "" || isNaN(temperature)) {
			setResult("Please enter a valid number.");
			return;
		}
		const fahrenheit = (Number(temperature) * 9) / 5 + 32;
		setResult(`${temperature}°C = ${fahrenheit.toFixed(2)}°F`);
	};
	const toCelsius = () => {
		if (temperature === "" || isNaN(temperature)) {
			setResult("Please enter a valid number.");
			return;
		}
		const celsius = ((Number(temperature) - 32) * 5) / 9;
		setResult(`${temperature}°F = ${celsius.toFixed(2)}°C`);
	};
	return (
		<>
			<label htmlFor="">Enter a number: </label> <br /> <br />
			<input
				value={temperature}
				onChange={(e) => setTemperature(e.target.value)}
				id="num"
				type="text"
			/>{" "}
			<br />
			<br />
			<button onClick={tofarenheit}>Celcius to Farenheit</button> <br /> <br />
			<button onClick={toCelsius}>Farenheit to Celcius</button>
			<p>{result}</p>
		</>
	);
}
export default C8;
