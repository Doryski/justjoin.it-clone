import React from 'react'
import { TECH_LVL_OPTIONS } from '../../helpers/utils'
import SelectComponent from '../shared/CustomSelect'
import InputComponent from '../shared/CustomInput'
import styled from 'styled-components'
import { Wrapper, InputsContainer } from './StyledComponents'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'

const TechnologySection = ({
    techSize,
    handleTechSize,
    register,
    errors,
}: {
    techSize: number
    handleTechSize: { add: VoidFunction; remove: VoidFunction }
    register: Function
    errors: Record<string, any>
}) => {
    return (
        <InputsContainer>
            {[...Array(techSize)].map((v, index) => (
                <Wrapper key={index}>
                    <InputComponent
                        max={35}
                        type='text'
                        name={`technology[${index}]`}
                        label='Technology'
                        register={register}
                        required
                        errors={errors}
                    />
                    <SelectComponent
                        name={`techLvl[${index}]`}
                        label='Tech level'
                        register={register}
                        required
                        errors={errors}
                        options={TECH_LVL_OPTIONS}
                    />
                </Wrapper>
            ))}

            <IconsWrapper>
                {techSize < 10 && (
                    <IconWrapper onClick={handleTechSize.add}>
                        <AddIcon />
                    </IconWrapper>
                )}

                {techSize > 1 && (
                    <IconWrapper onClick={handleTechSize.remove}>
                        <RemoveIcon />
                    </IconWrapper>
                )}
            </IconsWrapper>
        </InputsContainer>
    )
}
export const IconsWrapper = styled.div`
    padding: 0.3125em 0.625em;
    border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    margin: auto;
`
export const IconWrapper = styled.div`
    padding: 0.3125em 0.625em;
    border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.1875em;
    width: 50%;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.span};
    &:hover {
        background: ${({ theme }) =>
            theme.colors.buttonBackgroundHover};
    }
`

export default TechnologySection
