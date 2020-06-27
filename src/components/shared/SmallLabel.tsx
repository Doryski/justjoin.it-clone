import React from 'react'
import styled from 'styled-components'

const SmallLabel = ({
	children,
	span,
	margin,
	isNew,
}: {
	children: any
	span?: any
	margin?: any
	isNew?: any
}) => {
	return (
		<Container isNew={isNew} margin={margin}>
			<Typography isNew={isNew} span={span}>
				{children}
			</Typography>
		</Container>
	)
}
const Container = styled.div`
	padding: 3px 7px;
	margin: ${({ margin }) => margin || '0 2px'};
	border: 1px solid
		${({ theme, isNew }) =>
			isNew ? theme.colors.pink : theme.colors.span};
	border-radius: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Typography = styled.span`
	font-size: 10px;
	color: ${({ theme, span, isNew }) =>
		isNew
			? theme.colors.pink
			: span
			? theme.colors.span
			: theme.colors.title};
`
export default SmallLabel
