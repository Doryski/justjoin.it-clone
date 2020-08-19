import styled, { css } from 'styled-components'
import { textColors } from '../../theme'

interface TypographyProps {
	fWeight?: string
	family?: string
	fontSize?: string
	hide?: boolean
	color?: string
	hoverColor?: string
}

interface WrapperProps {
	display?: string
	margin?: string
	align?: string
	padding?: string
	minWidth?: string
}

export const Wrapper = styled.h4<WrapperProps>`
	${({ display, margin, align, padding, minWidth }) => css`
		display: ${display || 'block'};
		margin: ${margin || '0'};
		text-align: ${align || 'center'};
		padding: ${padding || '0'};
		${minWidth && `min-width: ${minWidth}`};
	`}
`
export const Typography = styled(Wrapper).attrs(
	({ as }: { as: string }) => ({
		as: !!as ? as : 'span',
	})
)`
	${({
		fWeight,
		family,
		fontSize,
		hide,
		color,
		hoverColor,
	}: TypographyProps) => css`
		font-weight: ${({ theme }) => fWeight || theme.fontWeight[600]};
		font-family: ${family || "'Open Sans', sans-serif"};
		font-size: ${({ theme }) => fontSize || theme.fontSize.md};
		${
			hide &&
			`
        overflow: hidden;
		text-overflow: ellipsis;
		`
		}
	color: ${({ theme }) => {
		switch (color) {
			case 'primary':
				return theme.colors.primary
			case 'text':
				return theme.colors.text
			case 'pink':
				return theme.colors.pink
			case 'title':
				return theme.colors.title
			case 'salary':
				return theme.colors.salary
			case 'span':
				return theme.colors.span
			case 'white':
				return theme.colors.white
			default:
				return theme.colors.title
		}
	}};
	&:hover {
		color: ${({ theme }) =>
			hoverColor === textColors.lightPink
				? theme.colors.lightPink
				: hoverColor};
	}
	`}
`

export default Typography
