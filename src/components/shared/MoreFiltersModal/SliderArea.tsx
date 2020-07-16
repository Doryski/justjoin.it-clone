import React from 'react'
import styled from 'styled-components'
import { ParamsType } from '../../../store/reducer'
import SenioritySection from './SenioritySection'
import SalarySection from './SalarySection'

type SliderAreaPropsTypes = {
	handleChange?: (
		event: React.ChangeEvent<{}>,
		value: number | number[]
	) => void
	value: number | number[]
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
			<SalarySection
				value={value}
				handleChange={handleChange}
			/>
			<HorizontalLine />
			<SenioritySection expLvl={expLvl} setExpLvl={setExpLvl} />
		</MainWrapper>
	)
}

const MainWrapper = styled.div`
	padding: 1em 1.5em;
	border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`

const HorizontalLine = styled.hr`
	margin: 1.5em 0 1em;
	border: none;
	height: 1px;
	background: ${({ theme }) => theme.colors.divider};
`

export default SliderArea
