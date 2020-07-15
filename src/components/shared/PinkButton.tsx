import React from 'react'
import styled from 'styled-components'

const PinkButton = ({
	children,
	margin,
	onclick,
}: {
	children: any
	margin?: string
	onclick?: Function
}) => {
	return (
		// @ts-ignore
		<Button margin={margin} onClick={onclick}>
			{children}
		</Button>
	)
}
const Button = styled.button`
	border: 0;
	border-radius: 18px;
	background: ${({ theme }) => theme.colors.pink};
	color: white;
	padding: 8px 18px;
	font-family: 'Open Sans', sans-serif;
	font-weight: 600;
	font-size: 0.875rem;
	margin: ${({ margin }: { margin: string }) => margin || '0 10px'};
	transition: all 0.4s;
	&:hover {
		background: ${({ theme }) => theme.colors.opacityPink};
	}
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		padding: 8px 8px;
	}
`
export default PinkButton
