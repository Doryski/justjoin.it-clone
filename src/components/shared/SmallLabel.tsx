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
	padding: 0.1875em 0.4375em;
	margin: ${({ margin }: ContainerProps) => margin || '0 0.125em'};
	border: 1px solid rgb(217, 221, 252);
	background: ${({ theme, isNew }: ContainerProps) =>
		isNew ? 'rgb(217, 221, 252)' : theme.colors.primary};
	border-radius: 11px;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Typography = styled.span`
	font-size: 0.6875rem;
	color: ${({ theme, span, isNew }: ContainerProps) =>
		isNew
			? 'rgb(66, 86, 239)'
			: span
			? theme.colors.span
			: theme.colors.title};
`
export default SmallLabel
