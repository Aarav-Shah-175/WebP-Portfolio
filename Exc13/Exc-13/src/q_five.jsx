import { useState } from "react";

import "./App.css";

function C5() {
	var isMorning = true;
	if (isMorning == true) {
		return (
			<>
				<div>Good Morning</div>
			</>
		);
	} else {
		return (
			<>
				<div>Good Evening</div>
			</>
		);
	}
}
export default C5;
