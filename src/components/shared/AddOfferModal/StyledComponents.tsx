import styled from 'styled-components'

export const InputsContainer = styled.div`
	padding: 20px;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		padding: 5px;
	}
`

export const ErrorMessage = styled.span`
	color: ${({ span, theme }: { span: boolean; theme: any }) =>
		span ? theme.colors.span : theme.colors.pink};
	font-size: 0.7rem;
	margin-left: 10px;
`
export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`
