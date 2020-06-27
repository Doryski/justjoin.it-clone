import React from 'react'
import styled from 'styled-components'

interface InputComponentProps {
	id: any
	label: any
	register: any
	required: any
	errors: any
	type: any
	max?: string
}

export const InputComponent = ({
	id,
	label,
	register,
	required,
	errors,
	type,
	max = '120',
}: InputComponentProps) => {
	return (
		<InputWrapper>
			<Label>{label}</Label>
			<StyledTextField
				maxLength={+max}
				type={type}
				name={id}
				ref={register({
					required: required
						? 'This field is required.'
						: false,
				})}
			/>
			{errors[id] && <Info>{errors[id].message}</Info>}
		</InputWrapper>
	)
}

interface SelectComponentProps {
	id: any
	label: any
	register: any
	required: any
	options: any
	errors: any
}

export const SelectComponent = ({
	id,
	label,
	register,
	required,
	options,
	errors,
}) => {
	return (
		<InputWrapper>
			<Label>{label}</Label>
			<StyledSelect name={id} ref={register({ required })}>
				<option value={null}></option>
				{options.map((option: any) => (
					<option value={option.id}>{option.label}</option>
				))}
			</StyledSelect>
			{errors[id] && <Info>This field is required.</Info>}
		</InputWrapper>
	)
}

const Info = styled.span`
	color: ${({ theme, span }: { theme: any; span: any }) =>
		span ? theme.colors.span : theme.colors.pink};
	font-size: 0.7rem;
	margin-left: 10px;
`

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
			theme.breakpoints.s}) {
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
			theme.breakpoints.s}) {
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
