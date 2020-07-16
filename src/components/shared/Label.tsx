import React from 'react'
import styled from 'styled-components'
import Typography from '../../helpers/Typography'

const Label = ({
	children,
	active,
}: {
	children: any
	active: boolean
}) => {
	return (
		<Container active={active}>
			{/* @ts-ignore */}
			<Typography color='text'>{children}</Typography>
		</Container>
	)
}
const Container = styled.div`
	padding: 0.625em 2.1875em;
	background: ${({
		theme,
		active,
	}: {
		theme: any
		active: boolean
	}) => (active ? theme.colors.secondary : theme.colors.primary)};
	position: relative;
	border-radius: 20px 20px 0 0;
`
export default Label
