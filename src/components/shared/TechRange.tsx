import React from 'react'
import styled from 'styled-components'
import Typography from '../../helpers/Typography'

const TechRange = ({ range, tech }: { range: any; tech: any }) => {
	const rangeSwitch = () => {
		switch (range) {
			case 1:
				return 'nice to have'
			case 2:
				return 'junior'
			case 3:
				return 'regular'
			case 4:
				return 'advanced'
			case 5:
				return 'expert'
		}
	}

	return (
		<Container>
			<RangeContainer>
				{[...Array(range)].map(() => (
					<RangePoint />
				))}
				{[...Array(5 - range)].map(() => (
					<RangePoint disabled />
				))}
			</RangeContainer>
			<Typography
				color='title'
				fWeight='600'
				fontSize='1.1rem'
				align='flex-start'
				margin='5px 0'
				hide
			>
				{tech}
			</Typography>
			<Typography
				color='logo'
				fontSize='0.8rem'
				fWeight='400'
				align='flex-start'
				margin='0'
			>
				{rangeSwitch()}
			</Typography>
		</Container>
	)
}
const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	max-width: 20%;
	flex: 0 0 20%;
	margin: 0px 0px 32px;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.md}) {
		max-width: 50%;
		flex: 1 0 50%;
	}
`
const RangeContainer = styled.div`
	display: flex;
`
const RangePoint = styled.span`
	background-color: ${({ disabled, theme }) =>
		disabled ? 'rgb(191, 197, 210)' : theme.colors.pink};
	display: block;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	margin: 0px 10px 0px 0px;
`

export default TechRange
