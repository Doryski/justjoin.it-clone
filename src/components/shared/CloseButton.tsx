import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'

const CloseButton = ({
	handleClick,
}: {
	handleClick: VoidFunction
}) => (
	<Wrapper onClick={handleClick}>
		<CloseIcon />
	</Wrapper>
)

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border: 1px solid ${({ theme }) => theme.colors.span};
	border-radius: 50%;
	cursor: pointer;
	transition: all 0.3s;
	color: ${({ theme }) => theme.colors.span};
	&:hover {
		background: ${({ theme }) =>
			theme.colors.buttonBackgroundHover};
	}
`

export default CloseButton
