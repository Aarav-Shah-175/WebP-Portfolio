import { useState } from "react";
import "./App.css";

function Userposts() {
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: "My First Post",
			content:
				"This is my first post! Welcome to my first blog post! As a React engineer, I'm excited to share insights on building dynamic user interfaces, optimizing performance, using hooks, state management, and best practices for scalable applications.",
		},
		{
			id: 2,
			title: "React is Awesome",
			content:
				"Learning React is fun!React is a JavaScript library for building UI components efficiently using a virtual DOM, hooks, JSX, props, state, components, rendering, events, effects, context, refs, lifecycle methods, performance optimization, reconciliation, portals, and concurrency. ",
		},
	]);

	return (
		<div style={{ width: "600px" }} className="Post">
			<br />
			<h1 style={{ fontSize: "25px" }}>User Posts</h1>

			{posts.map((post) => (
				<div
					style={{
						backgroundColor: "white",
						padding: "15px",
						margin: "20px",
						borderRadius: "20px",
					}}
					key={post.id}
				>
					<h2 style={{ fontSize: "20px", color: "blue" }}>{post.title}</h2>
					<p>{post.content}</p>
				</div>
			))}
		</div>
	);
}

export default Userposts;
