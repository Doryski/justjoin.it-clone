import styled, { css } from 'styled-components'

const Styled = styled.h4`
	${({
		margin,
		align,
		padding,
		minWidth,
		display,
	}: {
		margin: string
		align: string
		padding: string
		minWidth: string
		display?: string
	}) => css`
		display: ${display || 'block'};
		margin: ${margin || '0'};
		text-align: ${align || 'center'};
		padding: ${padding || '0'};
		${minWidth && `min-width: ${minWidth}`};
	`}
`
// @ts-ignore
const Typography = styled(Styled).attrs(({ as }: { as: string }) => ({
	as: as ? as : 'span',
}))`
	${(props: any) => css`
		font-weight: ${props.fWeight || '600'};
		font-family: ${props.family || "'Open Sans', sans-serif"};
		font-size: ${props.fontSize || '.875rem'};
		${props.hide &&
		`
        overflow: hidden;
		text-overflow: ellipsis;
		`}
	`}
	color: ${({ color, theme }: { color: string; theme: any }) => {
		switch (color) {
			case 'primary':
				return theme.colors.primary
			case 'light':
				return theme.colors.light
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
		color: ${({ hoverColor }: { hoverColor: string }) => hoverColor};
	}
`

export default Typography
