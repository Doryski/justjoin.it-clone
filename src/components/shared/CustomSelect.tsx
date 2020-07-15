import React from 'react'
import {
	InputWrapper,
	Label,
	StyledSelect,
	Info,
} from './StyledInputs'

type SelectComponentProps = {
	id: string
	label: string
	register: any
	required: string
	options: any[]
	errors: string
}

const SelectComponent = ({
	id,
	label,
	register,
	required,
	options,
	errors,
}: SelectComponentProps) => {
	return (
		<InputWrapper>
			<Label>{label}</Label>
			<StyledSelect name={id} ref={register({ required })}>
				<option value={null}></option>
				{options.map((option: string) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</StyledSelect>
			{errors[id] && <Info>This field is required.</Info>}
		</InputWrapper>
	)
}

export default SelectComponent
