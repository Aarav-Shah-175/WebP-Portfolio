import React, { useState, useEffect } from "react";

const JokeFetcher = () => {
	const [joke, setJoke] = useState("");

	// Function to fetch a joke from an API
	const fetchJoke = async () => {
		try {
			const response = await fetch(
				"https://official-joke-api.appspot.com/random_joke"
			);
			const data = await response.json();
			setJoke(`${data.setup} - ${data.punchline}`);
		} catch (error) {
			console.error("Error fetching joke:", error);
			setJoke("Failed to fetch joke. Try again!");
		}
	};

	// Fetch joke when component mounts
	useEffect(() => {
		fetchJoke();
	}, []);

	return (
		<div>
			<h2>Random Joke</h2>
			<p>{joke}</p>
			<button onClick={fetchJoke}>Get New Joke</button>
		</div>
	);
};

export default JokeFetcher;
