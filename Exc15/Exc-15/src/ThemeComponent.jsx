import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemedComponent = () => {
	const { theme } = useContext(ThemeContext);

	const styles = {
		backgroundColor: theme === "light" ? "#fff" : "#333",
		color: theme === "light" ? "#000" : "#fff",
		padding: "20px",
		textAlign: "center",
		border: "1px solid #ccc",
	};

	return <div style={styles}>Current Theme: {theme.toUpperCase()}</div>;
};

export default ThemedComponent;
