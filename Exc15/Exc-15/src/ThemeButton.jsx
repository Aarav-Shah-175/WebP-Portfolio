import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeButton = () => {
	const { toggleTheme } = useContext(ThemeContext);

	return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeButton;
