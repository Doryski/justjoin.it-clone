import styled from 'styled-components'

export const InputsContainer = styled.div`
			padding: 1.25em;
			@media only screen and (max-width: ${({ theme }) =>
					theme.breakpoints.sm}) {
				padding: 0.3125em;
			}
		`

export const ErrorMessage = styled.span`
	color: ${({ span, theme }: { span?: boolean; theme: any }) =>
		span ? theme.colors.span : theme.colors.pink};
	font-size: 0.7rem;
	margin-left: 0.625em;
`
export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`
