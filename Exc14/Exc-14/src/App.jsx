import "./App.css";
import myimg2 from "./assets/Images/myimg2.jpg";
import Q2 from "./q_two.jsx";

function App() {
	return (
		<>
			<h3>Q1</h3>
			<img
				style={{ height: "300px" }}
				src="/Images/myimg.jpg"
				alt="Not appearing"
			/>
			<br /> <br />
			<img style={{ height: "300px" }} src={myimg2} alt="" />
			<br />
			<br />
			<h3>Q2</h3>
			<Q2 />
		</>
	);
}

export default App;
