import { useState } from "react";
import "./App.css";
function C6() {
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const today = new Date().getDay();
	return <h2>Today is {days[today]}</h2>;
}
export default C6;
