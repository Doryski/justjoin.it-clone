import React from 'react'
import styled from 'styled-components'

interface SmallLabelProps {
	children: React.ReactNode
	isSpan?: boolean
	margin?: string
	isNew?: boolean
}
interface ContainerProps extends SmallLabelProps {
	theme?: any
}

const SmallLabel = ({
	children,
	isSpan,
	margin,
	isNew,
}: SmallLabelProps) => (
	<Container isNew={isNew} margin={margin}>
		<Typography isNew={isNew} isSpan={isSpan}>
			{children}
		</Typography>
	</Container>
)

export const Container = styled.div<ContainerProps>`
	padding: 0.1875em 0.4375em;
	margin: ${({ margin }) => margin || '0 0.125em'};
	border: 1px solid rgb(217, 221, 252);
	background: ${({ theme, isNew }) =>
		isNew ? 'rgb(217, 221, 252)' : theme.colors.primary};
	border-radius: 11px;
	display: flex;
	align-items: center;
	justify-content: center;
`
export const Typography = styled.span<ContainerProps>`
	font-size: ${({ theme }) => theme.fontSize.xs};
	color: ${({ theme, isSpan, isNew }) =>
		isNew
			? 'rgb(66, 86, 239)'
			: isSpan
			? theme.colors.span
			: theme.colors.title};
`
export default SmallLabel
