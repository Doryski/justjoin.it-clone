import React from 'react'
import styled from 'styled-components'

type ContainerProps = {
	theme?: any
	span?: boolean
	margin?: string
	isNew?: boolean
}

const SmallLabel = ({
	children,
	span,
	margin,
	isNew,
}: {
	children: any
	span?: boolean
	margin?: string
	isNew?: boolean
}) => {
	return (
		// @ts-ignore
		<Container isNew={isNew} margin={margin}>
			{/* @ts-ignore */}
			<Typography isNew={isNew} span={span}>
				{children}
			</Typography>
		</Container>
	)
}
const Container = styled.div`
	padding: 3px 7px;
	margin: ${({ margin }: ContainerProps) => margin || '0 2px'};
	border: 1px solid
		${({ theme, isNew }: ContainerProps) =>
			isNew ? theme.colors.pink : theme.colors.span};
	border-radius: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Typography = styled.span`
	font-size: 10px;
	color: ${({ theme, span, isNew }: ContainerProps) =>
		isNew
			? theme.colors.pink
			: span
			? theme.colors.span
			: theme.colors.title};
`
export default SmallLabel
