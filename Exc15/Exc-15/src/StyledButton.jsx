import React from "react";
const StyledButton = ({ text }) => {
	const buttonStyle = {
		backgroundColor: "#3498db",
		padding: "10px 20px",
		fontSize: "16px",
		color: "white",
		border: "none",
		borderRadius: "5px",
		cursor: "pointer",
	};

	return <button style={buttonStyle}>{text}</button>;
};

export default StyledButton;
