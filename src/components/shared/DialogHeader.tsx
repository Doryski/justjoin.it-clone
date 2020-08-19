import React from 'react'
import styled from 'styled-components'
import CloseButton from './CloseButton'
import Typography from './Typography'
import theme, { textColors } from '../../theme'

const DialogHeader = ({
	children,
	close,
}: {
	children: any
	close?: VoidFunction
}) => {
	return (
		<HeaderWrapper>
			<Typography
				color={textColors.text}
				fWeight={theme.fontWeight[400]}
				fontSize={theme.fontSize.xl}
			>
				{children}
			</Typography>
			{close && <CloseButton onclick={close} />}
		</HeaderWrapper>
	)
}

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.25em;
	border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		padding: 0.625em;
	}
`

export default DialogHeader
