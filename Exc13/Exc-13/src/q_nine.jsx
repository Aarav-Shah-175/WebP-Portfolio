import { useState } from "react";

function StringReverser() {
	const [inputText, setInputText] = useState("");
	const [reversedText, setReversedText] = useState("");
	const [isPalindrome, setIsPalindrome] = useState(false);

	const handleChange = (e) => {
		const text = e.target.value;
		const reversed = text.split("").reverse().join("");
		setInputText(text);
		setReversedText(reversed);
		setIsPalindrome(text.toLowerCase() === reversed.toLowerCase());
	};

	return (
		<div>
			<h2>String Reverser & Palindrome Checker</h2>
			<input
				type="text"
				value={inputText}
				onChange={handleChange}
				placeholder="Enter a word:"
			/>
			<p>Reversed String: {reversedText}</p>
			<p>
				{inputText &&
					(isPalindrome ? " It's a Palindrome!" : " Not a Palindrome")}
			</p>
		</div>
	);
}
export default StringReverser;
