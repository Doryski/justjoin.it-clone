import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Share, ArrowBack } from '@material-ui/icons'
import InitialStoreState from '../../types/InitialStoreState'
import OfferType from '../../types/OfferType'
import ParamsType from '../../types/ParamsType'
import { setParams } from '../../store/actions'
import InfoLabel from '../shared/InfoLabel'
import TechRange from '../shared/TechRange'
import Typography from '../../helpers/Typography'
import formatThous from '../../helpers/formatThous'
import infoLabels from '../../helpers/infoLabels'

const OfferPage = ({
	params,
	offers,
}: {
	params: ParamsType
	offers: OfferType[]
}) => {
	const { slug } = useParams()

	const [offer, setOffer] = useState<OfferType>(offers[0])

	const [loading2, setLoading2] = useState(false)

	useEffect(() => {
		setLoading2(true)
		console.log(localStorage.offers)
		const posts = JSON.parse(localStorage.offers)
		const foundPost = posts.find(
			(post: OfferType) => post.slug === slug
		)
		setOffer(foundPost)
		setLoading2(false)
	}, [slug])

	return (
		<Container>
			<ContainerScroll>
				{loading2 ? (
					<ProgressWrapper>
						<CircularProgress size='30px' />
					</ProgressWrapper>
				) : (
					<>
						<HeaderContainer>
							{/* @ts-ignore */}
							<HeaderInner tech={offer.tech}>
								<Link to='/'>
									<HeaderActionIcon arrow>
										<ArrowBack />
									</HeaderActionIcon>
								</Link>
								{/* @ts-ignore */}
								<HeaderActionIcon>
									<Share />
								</HeaderActionIcon>

								<HeaderWrapper>
									<ImgBackground>
										<Img src={offer.image} />
									</ImgBackground>
									<MainInfoContainer>
										<Typography
											color='white'
											align='flex-start'
											margin='0.25em 0'
											// @ts-ignore
											fWeight='400'
										>
											{formatThous(
												offer.salaryFrom
											)}{' '}
											-{' '}
											{formatThous(
												offer.salaryTo
											)}{' '}
											PLN
										</Typography>
										<Typography
											color='white'
											align='flex-start'
											// @ts-ignore
											fontSize='1.2rem'
											margin='0.25em 0'
										>
											{offer.offerTitle}
										</Typography>
										<Typography
											color='white'
											align='flex-start'
											margin='0.25em 0'
											// @ts-ignore
											fWeight='400'
										>
											{offer.street},{' '}
											{offer.city}
										</Typography>
									</MainInfoContainer>
								</HeaderWrapper>
							</HeaderInner>
							<InfoLabelsContainer>
								{infoLabels.map(label => (
									<InfoLabel
										key={label.id}
										icon={label.id}
										// @ts-ignore
										title={offer[label.title]}
									/>
								))}
							</InfoLabelsContainer>
						</HeaderContainer>
						<TechStackContainer>
							<Typography
								color='title'
								// @ts-ignore
								fWeight='500'
								fontSize='1.2rem'
								align='flex-start'
								margin='0.625em 1.25em'
							>
								Tech stack
							</Typography>
							<Wrapper>
								{offer.technology?.map(
									(item: any) => (
										<TechRange
											key={item.tech}
											range={item.techLvl}
											tech={item.tech}
										/>
									)
								)}
							</Wrapper>
						</TechStackContainer>
						<DescriptionContainer>
							<Typography
								color='title'
								// @ts-ignore
								fWeight='500'
								fontSize='1.2rem'
								align='flex-start'
								margin='0.625em 1.25em'
							>
								Description
							</Typography>

							<Wrapper>
								<DescriptionContent
									// dangerouslySetInnerHTML={createMarkup()}
									className='editor'
								></DescriptionContent>
							</Wrapper>
						</DescriptionContainer>
						<ApplyContainer>
							<Typography
								color='title'
								// @ts-ignore
								fWeight='500'
								fontSize='1.2rem'
								align='flex-start'
								margin='0.625em 1.25em'
							>
								Apply for this job
							</Typography>

							<Wrapper>
								<form>
									{/* First & last name - input */}
									{/* Email - input */}
									{/* Introduce yourself (linkedin/github links) - input */}
									{/* Upload CV (.pdf) - file loader */}
									{/* Processing data in future recruitment - check button */}
								</form>
							</Wrapper>
						</ApplyContainer>
					</>
				)}
			</ContainerScroll>
		</Container>
	)
}
export const Container = styled.div`
	flex: 1;
	background: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
	padding: 0 1.25em;
	position: relative;
	flex: 1 1 0%;
`
export const ContainerScroll = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	padding: 0 0.9375em;
	overflow: auto;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.md}) {
		padding: 0 0.1875em;
	}
`
export const HeaderContainer = styled.div`
	height: 235px;
	position: relative;
	margin: 0 0 3.125em 0;
`
export const HeaderInner = styled.div<{ tech: string }>`
	background: url(https://justjoin.it/static/media/header_background.0ef18c97.png)
			center center / cover no-repeat,
		${({ theme, tech }) => theme.techColors[tech]};
	height: 100%;
	border-radius: 0px 0px 4px 4px;
	padding: 2.5em 2.5em 2.5em;
	position: relative;
`
export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	align-content: flex-start;
	justify-content: center;
`
export const ImgBackground = styled.div`
	background-color: rgb(255, 255, 255);
	width: 107px;
	height: 107px;
	display: flex;
	position: relative;
	border-radius: 50%;
	align-items: center;
	justify-content: center;

	&:after,
	&:before {
		content: '';
		position: absolute;
		border-radius: 50%;
		width: 100%;
		height: 100%;
	}
	&:before {
		background: rgba(255, 255, 255, 0.5);
		transform: scale(1.2);
	}
	&:after {
		background: rgba(255, 255, 255, 0.3);
		transform: scale(1.4);
	}
`
export const Img = styled.img`
	max-width: 70px;
	max-height: 45px;
`
export const MainInfoContainer = styled.div`
	flex: 1;
	margin: 0 0 0 2.5em;
`
export const InfoLabelsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	transform: translateY(-50%);
	width: 100%;
	padding: 0 0.9375em;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.md}) {
		transform: translateY(-25%);
	}
`
export const TechStackContainer = styled.div`
	padding: 0.3125em 0;
	box-shadow: ${({ theme }) => theme.colors.shadow};
	margin-top: 2.5em;
	background: ${({ theme }) => theme.colors.primary};
	border-radius: 5px;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.md}) {
		margin-top: 10.625em;
	}
`
export const Wrapper = styled.div`
	padding: 1.5em;
	border-top: 2px solid ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-wrap: wrap;
`
export const DescriptionContainer = styled.div`
	margin: 1.875em 0;
	padding: 0.3125em 0;
	box-shadow: ${({ theme }) => theme.colors.shadow};
	background: ${({ theme }) => theme.colors.primary};
	border-radius: 5px;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.md}) {
		margin: 0.9375em 0;
	}
`
export const DescriptionContent = styled.div`
	padding: 0 0.9375em;
	color: ${({ theme }) => theme.colors.title};
`
export const ProgressWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 2.5em;
`

export const ApplyContainer = styled.div`
	margin: 1.875em 0;
	padding: 0.3125em 0;
	box-shadow: ${({ theme }) => theme.colors.shadow};
	background: ${({ theme }) => theme.colors.primary};
	border-radius: 5px;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.md}) {
		margin: 0.9375em 0;
	}
`

export const HeaderActionIcon = styled.button<{ arrow?: boolean }>`
	position: absolute;
	color: ${({ theme }) => theme.colors.white};
	background: rgba(0, 0, 0, 0.2);
	width: 28px;
	height: 28px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 10px;
	left: ${({ arrow }) => (arrow ? '10px' : '')};
	right: ${({ arrow }) => (arrow ? '' : '10px')};
	padding: 2px;
	border: none;
	border-radius: 4px;
	transition: all 300ms ease-out 0s;
	&:hover {
		background: rgba(0, 0, 0, 0.35);
	}
`

const mapStateToProps = ({ params, offers }: InitialStoreState) => ({
	params,
	offers,
})

export default connect(mapStateToProps, { setParams })(OfferPage)
