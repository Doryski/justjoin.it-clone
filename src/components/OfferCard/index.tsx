import React from 'react'
import Typography from '../shared/Typography'
import styled from 'styled-components'
import SmallLabel from '../shared/SmallLabel'
import CustomLabel from '../shared/CustomLabel'
import dateDiffFromNow from '../../helpers/dateDiffFromNow'
import { Link } from 'react-router-dom'
import formatThous from '../../helpers/formatThous'
import { setParams } from '../../store/actions'
import stringFormat from '../../helpers/stringFormat'
import { connect } from 'react-redux'
import ParamsType from '../../types/ParamsType'
import OfferType from '../../types/OfferType'
import InitialStoreState from '../../types/InitialStoreState'
import theme, { textColors } from '../../theme'

const OfferCard = ({
	params,
	offer,
}: {
	params: ParamsType
	offer: OfferType
}) => {
	const handleItemClick = () => {
		setParams({
			...params,
			location: stringFormat(offer.city),
			tech: offer.tech,
		})
	}

	return (
		<Link to={`/offers/${offer.slug}`} onClick={handleItemClick}>
			<Container>
				<TechColor tech={offer.tech} />
				<ImgWrapper>
					<Img src={offer.image} />
				</ImgWrapper>
				<InfoContainer>
					<TopWrapper>
						<TitleWrapper>
							<Typography
								color={textColors.title}
								align='flex-start'
								fontSize={theme.fontSize.large}
								hide
							>
								{offer.offerTitle}
							</Typography>
						</TitleWrapper>
						<SalaryWrapper>
							<Typography
								color={textColors.salary}
								align='flex-start'
								fWeight={theme.fontWeight[400]}
								fontSize={theme.fontSize.large}
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
									<SmallLabel isSpan key={tech}>
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
export const Container = styled.div`
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
export const TechColor = styled.div<{ tech: string }>`
	background: ${({ theme, tech }) => theme.techColors[tech]};
	width: 5px;
`
export const ImgWrapper = styled.div`
	height: 77px;
	width: 125px;
	display: flex;
	align-items: center;
	justify-content: center;
`
export const Img = styled.img`
	max-width: 100%;
	max-height: 60%;
`
export const InfoContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 0.5em 0.25em 0.5em 0px;
`
export const TopWrapper = styled.div`
	display: flex;
	padding: 0.35em 0 0.45em;
	flex-wrap: wrap;
`
export const BottomWrapper = styled.div`
	display: flex;

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		display: none;
	}
`
export const TitleWrapper = styled.div`
	flex: 1;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		padding: 0.3125em 0.625em 0.3125em 0;
	}
`
export const SalaryWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 0.625em 0 0;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.sm}) {
		padding: 0.3125em 0.625em 0.3125em 0;
	}
`
export const InfoWrapper = styled.div`
	flex: 1;
	display: flex;
`
export const RequirementsWrapper = styled.div`
	display: flex;
	margin-right: 0.875em;
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})
export default connect(mapStateToProps, { setParams })(OfferCard)
