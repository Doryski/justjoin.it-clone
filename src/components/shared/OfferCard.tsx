import React from 'react'
import Typography from '../../helpers/Typography'
import styled from 'styled-components'
import SmallLabel from './SmallLabel'
import CustomLabel from './CustomLabel'
import dateConvert from '../../helpers/dateConvert'
import { BASE_URL } from '../../axios'
import { Link } from 'react-router-dom'

export type OfferCard = {
	slug: string
	tech: string
	title: string
	companyName: string
	city: string
	image: string
	technology: { tech: string }[]
	salaryFrom: number
	salaryTo: number
	expLvl: string
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
}: OfferCard) => {
	const handleMouse = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
		eventType: 'mouseOver' | 'mouseOut'
	) => {
		const element = document.getElementById(placeId)
		if (eventType === 'mouseOver') {
			element?.classList.add('active_marker')
		} else if (eventType === 'mouseOut') {
			element?.classList.remove('active_marker')
		}
	}

	return (
		<Link to={`/offer/${slug}`}>
			<Container
				onMouseOver={e => handleMouse(e, 'mouseOver')}
				onMouseOut={e => handleMouse(e, 'mouseOut')}
			>
				{/* @ts-ignore */}
				<TechColor tech={tech} />
				<ImgWrapper>
					<Img src={`${BASE_URL}${image}`} />
				</ImgWrapper>
				<InfoContainer>
					<TopWrapper>
						<TitleWrapper>
							<Typography
								color='title'
								align='flex-start'
								// @ts-ignore
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
								// @ts-ignore
								fWeight='400'
								fontSize='1.1rem'
							>
								{from} - {to} PLN
							</Typography>
							<SmallLabel
								isNew={!dateConvert(dateAdd)}
								margin='0 0.3125em 0 0.625em'
							>
								{dateConvert(dateAdd) > 0
									? `${dateConvert(dateAdd)}d ago`
									: 'New'}
							</SmallLabel>
						</SalaryWrapper>
					</TopWrapper>
					<BottomWrapper>
						<InfoWrapper>
							<CustomLabel
								type='business'
								label={companyName}
							/>
							<CustomLabel
								type='location'
								label={city}
							/>
						</InfoWrapper>
						<RequirementsWrapper>
							{technology.map(({ tech }) => (
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
	margin: 0.3125em 0.3125em 0.625em 0.3125em;
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
	padding: 0.625em 0;
	flex-wrap: wrap;
`
const BottomWrapper = styled.div`
	display: flex;
	padding: 0.125em 0 0.625em 0;

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
