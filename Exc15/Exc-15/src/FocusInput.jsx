import React, { useRef } from "react";

const FocusInput = () => {
	const inputRef = useRef(null);

	const handleFocus = () => {
		inputRef.current.focus();
	};

	return (
		<div>
			<h2>Auto Focus Input</h2>
			<input ref={inputRef} type="text" placeholder="Type something..." />
			<button onClick={handleFocus}>Focus Input</button>
		</div>
	);
};

export default FocusInput;
