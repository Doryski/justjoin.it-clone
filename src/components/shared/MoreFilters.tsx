import React, { useState } from 'react'
import Typography from '../../helpers/Typography'
import CustomButton from './CustomButton'
import styled from 'styled-components'
import { Dialog } from '@material-ui/core'
import Header from './Header'
import PinkButton from './PinkButton'
import { connect } from 'react-redux'
import StyledLink from '../../helpers/StyledLink'
import url from '../../helpers/urlFunc'
import Slider from '@material-ui/core/Slider'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { InitialStoreState } from '../../store/reducer'

const techArray = ['Junior', 'Mid', 'Senior']

const DialogComponent = ({
	params,
	setDialogOpen,
	dialogOpen,
}: {
	params: any
	setDialogOpen: any
	dialogOpen: any
}) => {
	const [value, setValue] = useState([
		params.from || 0,
		params.to || 50000,
	])
	const fullScreen = useMediaQuery('(max-width:800px)')

	const handleChange = (event: any, newValue: any) => {
		setValue(newValue)
	}

	const [expLvl, setExpLvl] = useState(params.expLvl)

	const onClose = () => setDialogOpen(false)

	return (
		<Dialog
			maxWidth='md'
			open={dialogOpen}
			onClose={onClose}
			fullWidth={true}
			fullScreen={fullScreen}
		>
			<Container>
				<Header close={onClose}>More Filters</Header>

				<Wrapper>
					<SliderWrapper>
						<Slider
							value={value}
							onChange={handleChange}
							max={50000}
							step={1000}
						/>
					</SliderWrapper>
					<AmountContainer>
						<AmountWrapper>
							<Typography
								color='textButton'
								fWeight='600'
								fontSize='0.8rem'
								align='flex-start'
							>
								Min amount
							</Typography>

							<Typography
								color='textButton'
								fWeight='400'
								fontSize='0.9rem'
								align='flex-start'
							>
								{value[0]} PLN
							</Typography>
						</AmountWrapper>
						-
						<AmountWrapper>
							<Typography
								color='textButton'
								fWeight='600'
								fontSize='0.8rem'
								align='flex-start'
							>
								Max amount
							</Typography>

							<Typography
								color='textButton'
								fWeight='400'
								fontSize='0.9rem'
								align='flex-start'
							>
								{value[1]} PLN
							</Typography>
						</AmountWrapper>
					</AmountContainer>
				</Wrapper>

				<Wrapper>
					<ButtonWrapper>
						<CustomButton
							onclick={() => setExpLvl(null)}
							active={!expLvl}
							padding='8px 30px'
						>
							All
						</CustomButton>
					</ButtonWrapper>
					{techArray.map(lvl => (
						<ButtonWrapper>
							<CustomButton
								onclick={() =>
									setExpLvl(lvl.toLowerCase())
								}
								active={lvl.toLowerCase() === expLvl}
								padding='8px 30px'
							>
								{lvl}
							</CustomButton>
						</ButtonWrapper>
					))}
				</Wrapper>
				<BottomWrapper>
					<StyledLink
						to={url({ ...params, expLvl: null })}
						onClick={onClose}
					>
						<CustomButton padding='8px 30px'>
							Clear filters
						</CustomButton>
					</StyledLink>

					<StyledLink
						to={url({
							...params,
							expLvl,
							from: value[0],
							to: value[1] === 50000 ? null : value[1],
						})}
						onClick={onClose}
					>
						<PinkButton>Show offers</PinkButton>
					</StyledLink>
				</BottomWrapper>
			</Container>
		</Dialog>
	)
}

const MoreFilters = ({ params }) => {
	const [dialogOpen, setDialogOpen] = useState(false)

	return (
		<>
			<ButtonWrapper>
				<CustomButton
					onclick={() => setDialogOpen(true)}
					active={params.expLvl || params.from || params.to}
					icon
				>
					More Filters
				</CustomButton>
			</ButtonWrapper>
			{dialogOpen && (
				<DialogComponent
					params={params}
					dialogOpen={dialogOpen}
					setDialogOpen={setDialogOpen}
				/>
			)}
		</>
	)
}
const ButtonWrapper = styled.div`
	margin: 5px;
`
const Container = styled.div`
	height: 100%;
	width: 100%;
	background: ${({ theme }) => theme.colors.primary};
	padding: 0 20px;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.s}) {
		padding: 5px;
	}
`
const Wrapper = styled.div`
	display: flex;
	padding: 25px 15px;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.s}) {
		padding: 10px;
	}
`
const BottomWrapper = styled.div`
	padding: 15px;
	display: flex;
	justify-content: space-between;
	border-top: 2px solid ${({ theme }) => theme.colors.secondary};
`
const SliderWrapper = styled.div`
	padding: 20px;
	width: 100%;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.s}) {
		padding: 10px;
	}
`
const AmountContainer = styled.div`
	padding: 10px;
	width: 100%;
	display: flex;
	align-items: center;
`
const AmountWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	flex: 1 1 0%;
	padding: 10px 24px;
	margin: 0 5px;
	border-radius: 50px;
	border-width: 1px;
	border-style: solid;
	border-color: rgb(228, 232, 240);
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.s}) {
		padding: 5px 10px;
	}
`
const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps)(MoreFilters)
