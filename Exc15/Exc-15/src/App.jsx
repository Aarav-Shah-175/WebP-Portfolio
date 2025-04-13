import React, { useState } from "react";
import StyledButton from "./StyledButton.jsx";
import StyledButton2 from "./StyledButton2.jsx";
import StyledButton3 from "./StyledButton3.jsx";
import LifecycleDemo from "./LifecycleDemo.jsx";
import Parent from "./Parent.jsx";
import Counter from "./Counter";
import CounterWithReducer from "./CounterWithReducer";
import JokeFetcher from "./JokeFetcher";
import FocusInput from "./FocusInput";
import { ThemeProvider } from "./ThemeContext";
import ThemeButton from "./ThemeButton";
import ThemeComponent from "./ThemeComponent";
import RefForm from "./RefForm.jsx";
import StateForm from "./StateForm.jsx";

import "./App.css";

const Header = ({ title }) => <h1>{title}</h1>;

const Content = () => {
	const jokes = [
		"Why don’t skeletons fight each other? They don't have the guts.",
		"I'm reading a book on anti-gravity. It's impossible to put down!",
		"Why did the scarecrow win an award? Because he was outstanding in his field!",
	];
	const [joke, setJoke] = useState("Click the button for a joke!");

	const getRandomJoke = () => {
		const randomIndex = Math.floor(Math.random() * jokes.length);
		setJoke(jokes[randomIndex]);
	};

	return (
		<div>
			<p>{joke}</p>
			<button onClick={getRandomJoke}>Get Joke</button>
		</div>
	);
};

const Footer = () => <footer>© 2025 My React App</footer>;

const App = () => {
	const [showComponent, setShowComponent] = useState(true);

	return (
		<div>
			<h3>Q1</h3>
			<Header title="Welcome to My React App" />
			<Content />
			<Footer />
			<br />
			<br />
			<h3>Q2</h3>
			<h1>Inline CSS Button</h1>
			<StyledButton text="Click Me" />
			<br />
			<br />
			<h3>Q3</h3>
			<h1>Internal CSS Button</h1>
			<StyledButton2 text="Click Me" />
			<br />
			<br />
			<h3>Q4</h3>
			<h1>External CSS Button</h1>
			<StyledButton3 text="Click Me" />
			<br />
			<br />
			<h3>Q5</h3>
			<h1>React Lifecycle Methods</h1>
			<button onClick={() => setShowComponent(!showComponent)}>
				{showComponent ? "Unmount Component" : "Mount Component"}
			</button>
			{showComponent && <LifecycleDemo />}
			<br />
			<br />
			<h3>Q6 & Q7</h3>
			<h1>React Props Example</h1>
			<Parent />
			<br />
			<br />
			<h3>Q8</h3>
			<h1>React State Hooks Example</h1>
			<Counter />
			<CounterWithReducer />
			<br />
			<br />
			<h3>Q9</h3>
			<h1>React useEffect Example</h1>
			<JokeFetcher />
			<br />
			<br />
			<h3>Q10</h3>
			<h1>React useRef Example</h1>
			<FocusInput />
			<br />
			<br />
			<h3>Q11</h3>
			<ThemeProvider>
				<div>
					<h1>React useContext Example</h1>
					<ThemeComponent />
					<ThemeButton />
				</div>
			</ThemeProvider>
			<br />
			<br />
			<h3>Q12</h3>
			<h1>React Form Handling</h1>
			<StateForm />
			<RefForm />
		</div>
	);
};

export default App;
