import React from 'react'
import {
    InputWrapper,
    Label,
    StyledSelect,
    ErrorMessage,
} from './StyledComponents'
import { FIELD_REQUIRED_ERR } from '../../helpers/utils'

type SelectComponentProps = {
    name: string
    label: string
    register: any
    required: boolean
    options: { array: any[]; value?: string; label?: string }
    errors: Record<string, any>
}

const SelectComponent = ({
    name,
    label: selectLabel,
    register,
    required,
    options,
    errors,
}: SelectComponentProps) => {
    const { array, value, label } = options

    return (
        <InputWrapper>
            <Label htmlFor={name}>{selectLabel}</Label>
            <StyledSelect
                name={name}
                ref={register({
                    required: required ? FIELD_REQUIRED_ERR : false,
                })}
            >
                <option value={undefined}></option>
                {array.map(item =>
                    !!value && !!label ? (
                        <option key={item[value]} value={item[value]}>
                            {item[label]}
                        </option>
                    ) : (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    )
                )}
            </StyledSelect>
            {name.includes('technology') ||
            name.includes('techLvl') ? (
                <ErrorMessage>
                    {errors[name] instanceof Array &&
                        errors[name][0].message}
                </ErrorMessage>
            ) : (
                errors[name] &&
                errors[name].type === 'required' && (
                    <ErrorMessage>
                        {errors[name].message}
                    </ErrorMessage>
                )
            )}
        </InputWrapper>
    )
}

export default SelectComponent
