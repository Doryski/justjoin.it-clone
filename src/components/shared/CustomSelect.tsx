import React from 'react'
import {
    InputWrapper,
    Label,
    StyledSelect,
    Info,
} from './StyledInputs'
import { FIELD_REQUIRED_ERR } from '../../helpers/utils'

type SelectComponentProps = {
    name: string
    label: string
    register: any
    required: boolean
    options: any[]
    errors: Record<string, { required: boolean }>
}

const SelectComponent = ({
    name,
    label,
    register,
    required,
    options,
    errors,
}: SelectComponentProps) => {
    return (
        <InputWrapper>
            <Label htmlFor={name}>{label}</Label>
            <StyledSelect name={name} ref={register({ required })}>
                <option value={undefined}></option>
                {options.map((option: string) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </StyledSelect>
            {errors[name] && errors[name].required && (
                <Info>{FIELD_REQUIRED_ERR}</Info>
            )}
        </InputWrapper>
    )
}

export default SelectComponent
