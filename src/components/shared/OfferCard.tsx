import React from 'react'
import Typography from '../../helpers/Typography'
import styled from 'styled-components'
import SmallLabel from './SmallLabel'
import { BusinessLabel, LocationLabel } from './Label'
import dateConvert from '../../helpers/dateConvert'
import { baseURL } from '../../axios'
import { Link } from 'react-router-dom'

type OfferCardProps = {
	slug: string
	tech: string
	title: string
	companyName: string
	city: string
	image: string
	technology: any[]
	from: string
	to: string
	placeId: string
	dateAdd: string
}

const OfferCard = ({
	slug,
	tech,
	title,
	companyName,
	city,
	image,
	technology,
	from,
	to,
	placeId,
	dateAdd,
}: OfferCardProps) => {
	return (
		<Link to={`/offer/${slug}`}>
			<Container
				onMouseOver={() => {
					document
						.getElementById(placeId)
						.classList.add('active_marker')
				}}
				onMouseOut={() => {
					document
						.getElementById(placeId)
						.classList.remove('active_marker')
				}}
			>
				{/* @ts-ignore */}
				<TechColor tech={tech} />
				<ImgWrapper>
					<Img src={`${baseURL}${image}`} />
				</ImgWrapper>
				<InfoContainer>
					<TopWrapper>
						<TitleWrapper>
							<Typography
								color='title'
								align='flex-start'
								fontSize='1.2rem'
								hide
							>
								{title}
							</Typography>
						</TitleWrapper>
						<SalaryWrapper>
							<Typography
								color='salary'
								align='flex-start'
								fWeight='400'
								fontSize='1.1rem'
							>
								{from} - {to} PLN
							</Typography>
							<SmallLabel
								isNew={!dateConvert(dateAdd)}
								margin='0 5px 0 10px'
							>
								{dateConvert(dateAdd) > 0
									? `${dateConvert(dateAdd)}d ago`
									: 'New'}
							</SmallLabel>
						</SalaryWrapper>
					</TopWrapper>
					<BottomWrapper>
						<InfoWrapper>
							<BusinessLabel label={companyName} />
							<LocationLabel label={city} />
						</InfoWrapper>
						<RequirementsWrapper>
							{technology.map(item => (
								<SmallLabel span key={item.tech}>
									{item.tech.toLowerCase()}
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
	margin: 5px 5px 10px 5px;
	border-radius: 8px;
	box-shadow: ${({ theme }) => theme.shadows.card};
	background: ${({ theme }) => theme.colors.primary};
	display: flex;
	overflow: hidden;
	transition: box-shadow 0.13s;
	cursor: pointer;
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
`
const TopWrapper = styled.div`
	display: flex;
	padding: 10px 0;
	flex-wrap: wrap;
`
const BottomWrapper = styled.div`
	display: flex;
	padding: 2px 0 10px 0;

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		display: none;
	}
`
const TitleWrapper = styled.div`
	flex: 1;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		padding: 5px 10px 5px 0;
	}
`
const SalaryWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 10px 0 0;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		padding: 5px 10px 5px 0;
	}
`
const InfoWrapper = styled.div`
	flex: 1;
	display: flex;
`
const RequirementsWrapper = styled.div`
	display: flex;
	margin-right: 14px;
`
export default OfferCard
