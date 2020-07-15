import styled from 'styled-components'

export const StyledTextField = styled.input`
	border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
	border-radius: 18px;

	padding: ${(props: any) => props.padding || '2px 15px'};
	background: ${({ theme }) => theme.colors.buttonBackground};
	color: ${({ theme }) => theme.colors.text};
	width: 100%;
	height: 40px;
	transition: all 0.3s;
	&:hover {
		background: ${({ theme }) =>
			theme.colors.buttonBackgroundHover};
	}
	&:focus {
		background: ${({ theme }) =>
			theme.colors.buttonBackgroundHover};
		border: 1px solid ${({ theme }) => theme.colors.text};
	}
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		height: 25px;
	}
`
export const StyledSelect = styled.select`
	border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
	border-radius: 18px;

	padding: ${(props: any) => props.padding || '2px 15px'};
	background: ${({ theme }) => theme.colors.buttonBackground};
	color: ${({ theme }) => theme.colors.text};
	width: 100%;
	height: 40px;
	transition: all 0.3s;
	&:hover {
		background: ${({ theme }) =>
			theme.colors.buttonBackgroundHover};
	}
	&:focus {
		background: ${({ theme }) =>
			theme.colors.buttonBackgroundHover};
		border: 1px solid ${({ theme }) => theme.colors.text};
	}
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		height: 25px;
	}
`
export const InputWrapper = styled.div`
	margin: 0 3px 10px 3px;
`
export const Label = styled.label`
	margin-left: 10px;
	color: ${({ theme }) => theme.colors.text};
`
export const Info = styled.span`
	color: ${({ theme, span }: { theme: any; span: boolean }) =>
		span ? theme.colors.span : theme.colors.pink};
	font-size: 0.7rem;
	margin-left: 10px;
`
