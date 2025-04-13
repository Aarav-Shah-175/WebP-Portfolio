import "./App.css";
import QOne from "./q_one.jsx";
import C2 from "./q_two.jsx";
import C3 from "./q_three.jsx";
import C4 from "./q_four.jsx";
import C5 from "./q_five.jsx";
import C6 from "./q_six.jsx";
import C7 from "./q_seven.jsx";
import C8 from "./q_eight.jsx";
import C9 from "./q_nine.jsx";
import C10 from "./q_ten.jsx";
import C11 from "./q_eleven.jsx";
import C12 from "./q_twelve.jsx";

function App() {
	const message = "This is a message";
	const fruits = ["Apple", "Orange", "Guava"];
	return (
		<>
			<h3>Q1</h3>
			<QOne />
			<h1>Hello React!</h1>
			<h1>{message}</h1>
			<br />
			<br />
			<h3>Q2</h3>
			<C2 />
			<br />
			<br />
			<h3>Q3</h3>
			<C3 />
			<br />
			<br />
			<h3>Q4</h3>
			<C4 />
			<br />
			<br />
			<h3>Q5</h3>
			<C5 />
			<br />
			<br />
			<h3>Q6</h3>
			<C6 />
			<br />
			<br />
			<h3>Q7</h3>
			<C7 />
			<br />
			<br />
			<h3>Q8</h3>
			<C8 />
			<br />
			<br />
			<h3>Q9</h3>
			<C9 />
			<br />
			<br />
			<h3>Q10</h3>
			<C10 />
			<br />
			<br />
			<h3>Q11</h3>
			<C11 />
			<br />
			<br />
			<h3>Q12</h3>
			<C12 firstName="Aarav" lastName="Shah" />
		</>
	);
}

export default App;
