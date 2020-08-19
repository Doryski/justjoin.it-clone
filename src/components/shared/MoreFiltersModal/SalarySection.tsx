import React from 'react'
import Typography from '../Typography'
import Slider from '@material-ui/core/Slider'
import formatThous from '../../../helpers/formatThous'
import MAX_SLIDER_VALUE from '../../../helpers/maxSliderValue'
import { Wrapper } from './StyledComponents'
import styled from 'styled-components'
import theme, { textColors } from '../../../theme'

const SalarySection = ({
	value,
	handleChange,
}: {
	handleChange?: (
		event: React.ChangeEvent<{}>,
		value: number | number[]
	) => void
	value: number | number[]
}) => {
	const val0 = value instanceof Array ? value[0] : value
	const val1 = value instanceof Array ? value[1] : value

	return (
		<>
			<Typography
				color={textColors.text}
				fWeight={theme.fontWeight[700]}
				align='flex-start'
				margin='0 0 1em 0'
			>
				Salary expectations?
			</Typography>
			<Wrapper>
				<SliderWrapper>
					<Slider
						value={value}
						onChange={handleChange}
						max={MAX_SLIDER_VALUE}
						step={1000}
						color='secondary'
					/>
				</SliderWrapper>
				<AmountContainer>
					<AmountWrapper>
						<Typography
							color={textColors.text}
							fWeight={theme.fontWeight[600]}
							fontSize={theme.fontSize.sm}
							align='flex-start'
						>
							Min. amount
						</Typography>

						<Typography
							color={textColors.text}
							fWeight={theme.fontWeight[400]}
							align='flex-start'
						>
							{`${formatThous(val0)} PLN`}
						</Typography>
					</AmountWrapper>
					<Typography
						as='div'
						color={textColors.text}
						padding='0 0.375em'
					>
						—
					</Typography>
					<AmountWrapper>
						<Typography
							color={textColors.text}
							fWeight={theme.fontWeight[600]}
							fontSize={theme.fontSize.sm}
							align='flex-start'
						>
							Max. amount
						</Typography>

						<Typography
							color={textColors.text}
							fWeight={theme.fontWeight[400]}
							align='flex-start'
						>
							{val1 === MAX_SLIDER_VALUE
								? `${formatThous(
										MAX_SLIDER_VALUE
								  )}+ PLN`
								: `${formatThous(val1)} PLN`}
						</Typography>
					</AmountWrapper>
				</AmountContainer>
			</Wrapper>
		</>
	)
}

export const SliderWrapper = styled.div`
	padding: 0 0.375em;
	width: 100%;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		padding: 0.625em;
	}
`

export const AmountContainer = styled.div`
	margin-top: 0.25em;
	width: 100%;
	display: flex;
	align-items: center;
`
export const AmountWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	flex: 1 1 0%;
	padding: 0.375em 1.5em;
	border-radius: 50px;
	border-width: 1px;
	border-style: solid;
	border-color: ${({ theme }) => theme.colors.buttonBorder};
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		padding: 0.3125em 0.625em;
	}
`

export default SalarySection
