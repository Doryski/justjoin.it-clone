import React from 'react'
import {
	InputWrapper,
	Label,
	StyledTextField,
	Info,
} from '../shared/StyledInputs'
import { NestDataObject, FieldError } from 'react-hook-form'

type InputComponentProps = {
	id: string
	label: string
	register: any
	required: boolean
	errors: NestDataObject<Record<string, any>, FieldError>
	type: string
	max?: number
}

const InputComponent = ({
	id,
	label,
	register,
	required,
	errors,
	type,
	max = 120,
}: InputComponentProps) => {
	return (
		<InputWrapper>
			<Label>{label}</Label>
			<StyledTextField
				maxLength={max}
				type={type}
				name={id}
				ref={register({
					required: required
						? 'This field is required.'
						: false,
				})}
			/>
			{/* @ts-ignore */}
			{errors[id] && <Info>{errors[id].message}</Info>}
		</InputWrapper>
	)
}

export default InputComponent
