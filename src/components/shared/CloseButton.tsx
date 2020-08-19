import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'
import StyledIcon from './StyledIcon'

const CloseButton = ({
	handleClick,
}: {
	handleClick: VoidFunction
}) => (
	<Container onClick={handleClick}>
		<StyledIcon Icon={CloseIcon} />
	</Container>
)

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border: 1px solid ${({ theme }) => theme.colors.span};
	border-radius: 50%;
	cursor: pointer;
	transition: all 0.3s;
	&:hover {
		background: ${({ theme }) =>
			theme.colors.buttonBackgroundHover};
	}
`

export default CloseButton
