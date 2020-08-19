import React from 'react'
import styled from 'styled-components'
import Typography from './Typography'
import { textColors } from '../../theme'

const Label = ({
	children,
	active,
}: {
	children: any
	active: boolean
}) => {
	return (
		<Container active={active}>
			<Typography color={textColors.text}>
				{children}
			</Typography>
		</Container>
	)
}
export const Container = styled.div<{ active?: boolean }>`
	padding: 0.625em 2.1875em;
	background: ${({ theme, active }) =>
		active ? theme.colors.secondary : theme.colors.primary};
	position: relative;
	border-radius: 20px 20px 0 0;
`
export default Label
