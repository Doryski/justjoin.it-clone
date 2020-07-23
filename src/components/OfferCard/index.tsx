import React, { useState } from 'react'
import Typography from '../../helpers/Typography'
import styled from 'styled-components'
import SmallLabel from '../shared/SmallLabel'
import CustomLabel from '../shared/CustomLabel'
import dateDiffFromNow from '../../helpers/dateDiffFromNow'
import { BASE_URL } from '../../axios'
import { Link } from 'react-router-dom'
import formatThous from '../../helpers/formatThous'

export type OfferCardType = {
	slug: string
	tech: string
	offerTitle: string
	companyName: string
	city: string
	image: string
	technology: { tech: any }[]
	salaryFrom: number
	salaryTo: number
	placeId: string
	dateAdd: string
}

const OfferCard = ({ offer }: { offer: OfferCardType }) => {
	const [isOfferActive, setIsOfferActive] = useState(false)

	return (
		<Link to={`/offers/${offer.slug}`}>
			<Container
				onMouseOver={() => setIsOfferActive(true)}
				onMouseOut={() => setIsOfferActive(false)}
			>
				{/* @ts-ignore */}
				<TechColor tech={offer.tech} />
				<ImgWrapper>
					<Img src={`${BASE_URL}${offer.image}`} />
				</ImgWrapper>
				<InfoContainer>
					<TopWrapper>
						<TitleWrapper>
							<Typography
								color='title'
								align='flex-start'
								// @ts-ignore
								fontSize='1rem'
								hide
							>
								{offer.offerTitle}
							</Typography>
						</TitleWrapper>
						<SalaryWrapper>
							<Typography
								color='salary'
								align='flex-start'
								// @ts-ignore
								fWeight='400'
								fontSize='1rem'
								margin='0 .1em 0 0'
							>
								{formatThous(offer.salaryFrom)} -{' '}
								{formatThous(offer.salaryTo)} PLN
							</Typography>
							<SmallLabel
								isNew={
									dateDiffFromNow(offer.dateAdd) < 1
								}
								margin='0 0.3125em 0 0.625em'
							>
								{dateDiffFromNow(offer.dateAdd) < 1
									? 'New'
									: `${dateDiffFromNow(
											offer.dateAdd
									  )}d ago`}
							</SmallLabel>
						</SalaryWrapper>
					</TopWrapper>
					<BottomWrapper>
						<InfoWrapper>
							<CustomLabel
								type='business'
								label={offer.companyName}
							/>
							<CustomLabel
								type='location'
								label={offer.city}
							/>
						</InfoWrapper>
						<RequirementsWrapper>
							{offer.technology
								.slice(0, 3)
								.map(({ tech }) => (
									<SmallLabel span key={tech}>
										{tech.toLowerCase()}
									</SmallLabel>
								))}
						</RequirementsWrapper>
					</BottomWrapper>
				</InfoContainer>
			</Container>
		</Link>
	)
}
const Container = styled.div`
	margin: 0 0.625em 0.75em;
	border-radius: 6px;
	box-shadow: ${({ theme }) => theme.shadows.card};
	background: ${({ theme }) => theme.colors.primary};
	display: flex;
	overflow: hidden;
	transition: box-shadow 0.13s;
	cursor: pointer;
	height: 77px;
	&:hover {
		box-shadow: ${({ theme }) => theme.shadows.cardHover};
	}
`
const TechColor = styled.div`
	background: ${({ theme, tech }: { theme: any; tech: string }) =>
		theme.techColors[tech]};
	width: 5px;
`
const ImgWrapper = styled.div`
	height: 77px;
	width: 125px;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Img = styled.img`
	max-width: 85px;
	max-height: 40px;
`
const InfoContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 0.5em 0.25em 0.5em 0px;
`
const TopWrapper = styled.div`
	display: flex;
	padding: 0.35em 0 0.45em;
	flex-wrap: wrap;
`
const BottomWrapper = styled.div`
	display: flex;

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		display: none;
	}
`
const TitleWrapper = styled.div`
	flex: 1;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		padding: 0.3125em 0.625em 0.3125em 0;
	}
`
const SalaryWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 0.625em 0 0;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		padding: 0.3125em 0.625em 0.3125em 0;
	}
`
const InfoWrapper = styled.div`
	flex: 1;
	display: flex;
`
const RequirementsWrapper = styled.div`
	display: flex;
	margin-right: 0.875em;
`
export default OfferCard
