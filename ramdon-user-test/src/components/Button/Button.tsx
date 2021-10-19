import React from 'react'
import '../App.css';

interface IButton {
	isActive: boolean;
	clicked: any;
}

const Button = ({isActive, clicked}: IButton) => {
	return (
		<div>
			<button onClick={clicked}>Test</button>
		</div>
	)
}

export default Button
