import React from 'react'
import {
    InputWrapper,
    Label,
    StyledInput,
    ErrorMessage,
} from './StyledComponents'
import {
    VAL_IS_ZERO_ERR,
    VAL_TOO_BIG_ERR,
    FIELD_REQUIRED_ERR,
} from '../../helpers/utils'

type InputComponentProps = {
    name: string
    label: string
    register: Function
    required: boolean
    errors: Record<string, any>
    type: string
    max?: number
    step?: number
}

const InputComponent = ({
    name,
    label,
    register,
    required,
    errors,
    type,
    step,
    max = 120,
}: InputComponentProps) => {
    const checkMinValue = (value: number) =>
        value > 0 || VAL_IS_ZERO_ERR
    const checkMaxValue = (value: number) =>
        value < 100000 || VAL_TOO_BIG_ERR
    const registerNumber = register({
        required: FIELD_REQUIRED_ERR,
        validate: {
            lessThan: (value: number) => checkMinValue(value),
            moreThan: (value: number) => checkMaxValue(value),
        },
    })
    const registerText = register({
        required: required ? FIELD_REQUIRED_ERR : false,
    })
    return (
        <InputWrapper>
            <Label htmlFor={name}>{label}</Label>
            <StyledInput
                id={name}
                maxLength={max}
                type={type}
                name={name}
                step={step}
                ref={
                    type === 'number' ? registerNumber : registerText
                }
            />
            {errors[name] && errors[name].type === 'required' && (
                <ErrorMessage>{errors[name].message}</ErrorMessage>
            )}
        </InputWrapper>
    )
}

export default InputComponent
