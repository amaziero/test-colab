import React from 'react'
import { Container } from "./styles"

interface IButton {
	isActive: boolean;
	clicked: any;
}

const Button: React.FC<IButton> = ({isActive, clicked}) => {
	return (
		<Container >
			<button onClick={clicked}>Test</button>
		</Container>
		
	)
}

export default Button
