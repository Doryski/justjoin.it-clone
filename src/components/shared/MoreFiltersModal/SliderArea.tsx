import React from 'react'
import Typography from '../../../helpers/Typography'
import CustomButton from '../CustomButton'
import styled from 'styled-components'
import Slider from '@material-ui/core/Slider'
import { expLvlArray } from '../../../helpers/options'
import _ from 'lodash'
import formatThous from '../../../helpers/formatThous'
import MAX_SLIDER_VALUE from '../../../helpers/maxSliderValue'

type SliderAreaPropsTypes = {
	handleChange: VoidFunction 
	value: [number, number]
	expLvl: string
	setExpLvl: React.Dispatch<React.SetStateAction<string>>
}

const SliderArea = ({ handleChange, value, expLvl, setExpLvl }:SliderAreaPropsTypes) => {
	return (
		<MainWrapper>
			<Typography
				color='text'
				fWeight='700'
				align='flex-start'
				margin='0 0 16px 0'
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
							fWeight='600'
							fontSize='0.75rem'
							align='flex-start'
						>
							Min. amount
						</Typography>

						<Typography
							color='text'
							fWeight='400'
							align='flex-start'
						>
							{`${formatThous(value[0])} PLN`}
						</Typography>
					</AmountWrapper>
					<Typography
						as='div'
						color='text'
						padding='0 6px'
					>
						—
					</Typography>
					<AmountWrapper>
						<Typography
							color='text'
							fWeight='600'
							fontSize='0.75rem'
							align='flex-start'
						>
							Max. amount
						</Typography>

						<Typography
							color='text'
							fWeight='400'
							align='flex-start'
						>
							{value[1] === MAX_SLIDER_VALUE
								? `${formatThous(
										MAX_SLIDER_VALUE
								  )}+ PLN`
								: `${formatThous(value[1])} PLN`}
						</Typography>
					</AmountWrapper>
				</AmountContainer>
			</Wrapper>

			<HorizontalLine />

			<Typography
				align='flex-start'
				color='text'
				fWeight='700'
				margin='0 0 16px 0'
			>
				Seniority
			</Typography>
			<Wrapper>
				<CustomButton
					onclick={() => {
						setExpLvl(null)
					}}
					active={!expLvl}
					padding='6px 40px'
					margin='6px 6px 6px 0'
				>
					All
				</CustomButton>
				{expLvlArray.map(lvl => (
					<CustomButton
						onclick={() => {
							setExpLvl(lvl)
						}}
						active={lvl === expLvl}
						padding='6px 40px'
						margin='6px'
						key={lvl}
					>
						{_.capitalize(lvl)}
					</CustomButton>
				))}
			</Wrapper>
		</MainWrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	// padding: 25px 15px;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		padding: 10px;
	}
`

const SliderWrapper = styled.div`
	padding: 0 6px;
	width: 100%;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		padding: 10px;
	}
`
const AmountContainer = styled.div`
	margin-top: 4px;
	width: 100%;
	display: flex;
	align-items: center;
`
const AmountWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	flex: 1 1 0%;
	padding: 6px 24px;
	border-radius: 50px;
	border-width: 1px;
	border-style: solid;
	border-color: rgb(228, 232, 240);
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		padding: 5px 10px;
	}
`
const MainWrapper = styled.div`
	padding: 16px 24px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`

const HorizontalLine = styled.hr`
	margin: 24px 0px 16px;
	border: none;
	height: 1px;
	background: ${({ theme }) => theme.colors.divider};
`

export default SliderArea
