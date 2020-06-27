import styled, { css } from 'styled-components'

const Styled = styled.h4`
	display: block;
	${({ margin, align }: { margin: string; align: string }) => css`
		margin: ${margin || '0'};
		text-align: ${align || 'center'};
	`}
`

export default styled(Styled).attrs(({ as }: { as: string }) => ({
	as: as ? as : 'span',
}))`
	${(props: any) => css`
		font-weight: ${props.fWeight || '600'};
		font-family: ${props.family || "'Open Sans', sans-serif"};
		font-size: ${props.fontSize || '1rem'};
		${props.hide &&
		`
        overflow: hidden;
        text-overflow: ellipsis;
		`}
	`}
	${({ color, theme }: { color: string; theme: any }) => {
		switch (color) {
			case 'primary':
				return 'color: ' + theme.colors.primary
			case 'light':
				return 'color: ' + theme.colors.light
			case 'textButton':
				return 'color: ' + theme.colors.buttonText
			case 'text':
				return 'color: ' + theme.colors.text
			case 'pink':
				return 'color: ' + theme.colors.pink
			case 'title':
				return 'color: ' + theme.colors.title
			case 'salary':
				return 'color: ' + theme.colors.salary
			case 'span':
				return 'color: ' + theme.colors.span
			case 'white':
				return 'color: ' + theme.colors.white
			case 'logo':
				return 'color: ' + theme.colors.logo
		}
	}};
`
