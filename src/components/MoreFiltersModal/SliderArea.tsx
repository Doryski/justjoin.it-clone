import React from 'react'
import styled from 'styled-components'
import SenioritySection from './SenioritySection'
import SalarySection from './SalarySection'
import ParamsType from '../../types/ParamsType'
import { Value } from './DialogComponent'
import Slider from '@material-ui/core/Slider'
import { MAX_SLIDER_VALUE } from '../../helpers/utils'

type SliderAreaPropsTypes = {
    handleChange?: (
        event: React.ChangeEvent<{}>,
        value: Value
    ) => void
    value: Value
    expLvl?: ParamsType['expLvl']
    setExpLvl: React.Dispatch<
        React.SetStateAction<ParamsType['expLvl']>
    >
}

const SliderArea = ({
    handleChange,
    value,
    expLvl,
    setExpLvl,
}: SliderAreaPropsTypes) => {
    return (
        <MainWrapper>
            <SalarySection value={value}>
                <Slider
                    value={value}
                    onChange={handleChange}
                    max={MAX_SLIDER_VALUE}
                    step={1000}
                    color='secondary'
                />
            </SalarySection>
            <HorizontalLine />
            <SenioritySection expLvl={expLvl} setExpLvl={setExpLvl} />
        </MainWrapper>
    )
}

export const MainWrapper = styled.div`
    padding: 1em 1.5em;
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`

export const HorizontalLine = styled.hr`
    margin: 1.5em 0 1em;
    border: none;
    height: 1px;
    background: ${({ theme }) => theme.colors.divider};
`

export default SliderArea
