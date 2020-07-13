import styled, { css } from 'styled-components'

const Styled = styled.h4`
	display: block;
	${({
		margin,
		align,
		padding,
		minWidth,
	}: {
		margin: string
		align: string
		padding: string
		minWidth: string
	}) => css`
		margin: ${margin || '0'};
		text-align: ${align || 'center'};
		padding: ${padding || '0'};
		${minWidth && `min-width: ${minWidth}`};
	`}
`

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
			case 'textButton':
				return theme.colors.buttonText
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
			case 'logo':
				return theme.colors.logo
		}
	}};
	&:hover {
		color: ${({ hoverColor }: { hoverColor: string }) => hoverColor};
	}
`

export default Typography
