import React, { useState } from "react";

const StateForm = () => {
	const [formData, setFormData] = useState({ name: "", email: "" });

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Submitted Name: ${formData.name}, Email: ${formData.email}`);
	};

	return (
		<div>
			<h2>Form Using useState</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Enter Name"
					value={formData.name}
					onChange={handleChange}
				/>
				<input
					type="email"
					name="email"
					placeholder="Enter Email"
					value={formData.email}
					onChange={handleChange}
				/>
				<button type="submit">Submit</button>
			</form>
			<p>
				Live Preview: {formData.name} - {formData.email}
			</p>
		</div>
	);
};

export default StateForm;
