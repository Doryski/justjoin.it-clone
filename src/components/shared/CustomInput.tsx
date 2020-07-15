import React from 'react'
import {
	InputWrapper,
	Label,
	StyledTextField,
	Info,
} from '../shared/StyledInputs'

type InputComponentProps = {
	id: string
	label: string
	register: any
	required: string
	errors: string
	type: string
	max?: string
}

const InputComponent = ({
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

export default InputComponent
