import React, { useRef, useState } from "react";

const RefForm = () => {
	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const [submittedData, setSubmittedData] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmittedData({
			name: nameRef.current.value,
			email: emailRef.current.value,
		});
	};

	return (
		<div>
			<h2>Form Using useRef</h2>
			<form onSubmit={handleSubmit}>
				<input type="text" ref={nameRef} placeholder="Enter Name" name="name" />
				<input
					type="email"
					ref={emailRef}
					name="email"
					placeholder="Enter Email"
				/>
				<button type="submit">Submit</button>
			</form>
			{submittedData && (
				<p>
					Submitted Data: {submittedData.name} - {submittedData.email}
				</p>
			)}
		</div>
	);
};

export default RefForm;
