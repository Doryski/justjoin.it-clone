import React from 'react'
import Typography from '../../../helpers/Typography'
import Slider from '@material-ui/core/Slider'
import formatThous from '../../../helpers/formatThous'
import MAX_SLIDER_VALUE from '../../../helpers/maxSliderValue'
import { Wrapper } from './StyledComponents'
import styled from 'styled-components'

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
				color='text'
				// @ts-ignore
				fWeight='700'
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
							color='text'
							// @ts-ignore
							fWeight='600'
							fontSize='0.75rem'
							align='flex-start'
						>
							Min. amount
						</Typography>

						<Typography
							color='text'
							// @ts-ignore
							fWeight='400'
							align='flex-start'
						>
							{`${formatThous(val0)} PLN`}
						</Typography>
					</AmountWrapper>
					{/* @ts-ignore */}
					<Typography
						as='div'
						color='text'
						padding='0 0.375em'
					>
						—
					</Typography>
					<AmountWrapper>
						<Typography
							color='text'
							// @ts-ignore
							fWeight='600'
							fontSize='0.75rem'
							align='flex-start'
						>
							Max. amount
						</Typography>

						<Typography
							color='text'
							// @ts-ignore
							fWeight='400'
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

const SliderWrapper = styled.div`
	padding: 0 0.375em;
	width: 100%;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		padding: 0.625em;
	}
`

const AmountContainer = styled.div`
	margin-top: 0.25em;
	width: 100%;
	display: flex;
	align-items: center;
`
const AmountWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	flex: 1 1 0%;
	padding: 0.375em 1.5em;
	border-radius: 50px;
	border-width: 1px;
	border-style: solid;
	border-color: rgb(228, 232, 240);
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		padding: 0.3125em 0.625em;
	}
`

export default SalarySection
