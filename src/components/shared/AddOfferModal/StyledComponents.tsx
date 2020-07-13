import styled from 'styled-components'

export const InputsContainer = styled.div`
	padding: 20px;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.s}) {
		padding: 5px;
	}
`

export const ErrorMessage = styled.span`
	color: ${(props: any) =>
		props.span
			? props.theme.colors.span
			: props.theme.colors.pink};
	font-size: 0.7rem;
	margin-left: 10px;
`
export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`
