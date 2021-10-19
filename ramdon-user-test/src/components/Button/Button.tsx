import React from 'react'
import { Container } from "./styles"

interface IButton {
	isActive: boolean;
	clicked: any;
}

const Button: React.FC<IButton> = ({isActive, clicked}) => {
	return (
		<Container onClick={clicked} >
			{
				isActive ? "Get another user" : "Get user"
			}
		</Container>
		
	)
}

export default Button
