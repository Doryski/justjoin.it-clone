import styled from 'styled-components'

export const InputsContainer = styled.div`
	padding: 1.25em;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		padding: 0.3125em;
	}
`

export const ErrorMessage = styled.span<{ span?: boolean }>`
	color: ${({ span, theme }) =>
		span ? theme.colors.span : theme.colors.pink};
	font-size: ${({theme}) => theme.fontSize.small}
	margin-left: 0.625em;
`
export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`
