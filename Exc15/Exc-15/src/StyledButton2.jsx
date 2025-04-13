import React from "react";
const StyledButton2 = ({ text }) => {
	return (
		<div>
			<style>
				{`
          .styled-button {
            background-color: #3498db;
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
        `}
			</style>
			<button className="styled-button">{text}</button>
		</div>
	);
};

export default StyledButton2;
