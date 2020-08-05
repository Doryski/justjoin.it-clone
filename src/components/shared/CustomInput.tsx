import React from 'react'
import {
	InputWrapper,
	Label,
	StyledInput,
	Info,
} from '../shared/StyledInputs'

type InputComponentProps = {
	name: string
	label: string
	register: Function
	required: boolean
	errors: Record<string, any>
	type: string
	max?: number
}

const InputComponent = ({
	name,
	label,
	register,
	required,
	errors,
	type,
	max = 120,
}: InputComponentProps) => {
	return (
		<InputWrapper>
			<Label htmlFor={name}>{label}</Label>
			<StyledInput
				id={name}
				maxLength={max}
				type={type}
				name={name}
				ref={register({
					required: required
						? 'This field is required.'
						: false,
				})}
			/>
			{/* @ts-ignore */}
			{errors[name] && errors[name].required && (
				<Info>{errors[name].message}</Info>
			)}
		</InputWrapper>
	)
}

export default InputComponent
