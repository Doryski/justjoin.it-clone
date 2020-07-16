import React from 'react'
import {
	InputWrapper,
	Label,
	StyledSelect,
	Info,
} from './StyledInputs'
import { NestDataObject, FieldError } from 'react-hook-form'

type SelectComponentProps = {
	id: string
	label: string
	register: any
	required: boolean
	options: any[]
	errors: NestDataObject<Record<string, any>, FieldError>
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
				<option value={undefined}></option>
				{options.map((option: string) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</StyledSelect>
			{/* @ts-ignore */}
			{errors[id] && <Info>This field is required.</Info>}
		</InputWrapper>
	)
}

export default SelectComponent
