import React from 'react'
import Typography from '../Typography'
import CustomButton from '../CustomButton'
import expLvlOptions from '../../../helpers/expLvlOptions'
import _ from 'lodash'
import { Wrapper } from './StyledComponents'
import ParamsType from '../../../types/ParamsType'
import theme, { textColors } from '../../../theme'

const SenioritySection = ({
	expLvl,
	setExpLvl,
}: {
	expLvl?: ParamsType['expLvl']
	setExpLvl: React.Dispatch<
		React.SetStateAction<ParamsType['expLvl']>
	>
}) => {
	return (
		<>
			<Typography
				align='flex-start'
				color={textColors.text}
				fWeight={theme.fontWeight[700]}
				margin='0 0 1em 0'
			>
				Seniority
			</Typography>
			<Wrapper>
				<CustomButton
					onclick={() => {
						setExpLvl(null)
					}}
					active={!expLvl}
					padding='0.375em 2.5em'
					margin='0.375em 0.375em 0.375em 0'
				>
					All
				</CustomButton>
				{expLvlOptions.map(lvl => (
					<CustomButton
						onclick={() => {
							setExpLvl(lvl)
						}}
						active={lvl === expLvl}
						padding='0.375em 2.5em'
						margin='0.375em'
						key={lvl}
					>
						{_.capitalize(lvl)}
					</CustomButton>
				))}
			</Wrapper>
		</>
	)
}

export default SenioritySection
