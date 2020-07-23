import React, { useState, useEffect, useRef } from 'react'
import Typography from '../../helpers/Typography'
import InfoLabel from '../shared/InfoLabel'
import TechRange from '../shared/TechRange'
import styled from 'styled-components'
import { useParams, useLocation, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
	setMarkers,
	setGoogleMap,
	setOffersList,
	setMarkerClass,
	setParams,
} from '../../store/actions'
import axios, { BASE_URL } from '../../axios'
import CircularProgress from '@material-ui/core/CircularProgress'
import { InitialStoreState, OfferType } from '../../store/reducer'
import _ from 'lodash'
import Map from '../Map'
import offerListDemo from '../Map/offerListDemo'
import useUpdateLogger from '../../helpers/useUpdateLogger'
import formatThous from '../../helpers/formatThous'
import {
	Share,
	ArrowLeft,
	ChevronLeft,
	KeyboardArrowLeft,
	ArrowBack,
} from '@material-ui/icons'

export type SingleOfferProps = {
	history: any
	setMarkers: Function
	setMarkerClass: Function
	setParams: Function
	setGoogleMap: Function
	setOffersList: Function
	state: InitialStoreState
}

const SingleOffer = ({
	history,
	setMarkers,
	setMarkerClass,
	setParams,
	setGoogleMap,
	setOffersList,
	state: { params, loading, markers, allOffers },
}: SingleOfferProps) => {
	const { slug } = useParams()
	const location = useLocation()

	const [offer, setOffer] = useState<OfferType>(offerListDemo[0])

	// const [loading2, setLoading2] = useState(false)

	// const ref = useRef()

	// useEffect(() => {
	// 	if (!loading && _.isEmpty(markers)) {
	// 		const paramss = JSON.parse(localStorage.params) || params

	// 		const map = new global.google.maps.Map(
	// 			document.getElementById('map'),
	// 			initMapOptions()
	// 		)

	// 		const markers: {
	// 			[key: string]: {
	// 				(item: any, map: any, initParams: any): void
	// 				prototype?: google.maps.OverlayView
	// 			}
	// 		} = {}

	// 		const CustomMarker = createHTMLMapMarker(history)

	// 		let list: any[] = []

	// 		allOffers.forEach((item: any) => {
	// 			list = list.concat(item.offers)
	// 			markers[item.placeId] = new CustomMarker(
	// 				item,
	// 				map,
	// 				paramss
	// 			)
	// 		})

	// 		setGoogleMap(map)
	// 		setMarkers(markers)
	// 		setParams(paramss)
	// 		setMarkerClass(CustomMarker)
	// 		setOffersList(list)

	// 		if (offer) {
	// 			markers[offer.placeId].activeMarker()
	// 		}
	// 	}
	// }, [markers, loading])

	// useEffect(() => {
	// 	async function offerFetch() {
	// 		setLoading2(true)
	// 		try {
	// 			// /posts/
	// 			const { data } = await axios.get(`/posts/${slug}`)

	// 			setOffer((prev: any) => {
	// 				if (prev) {
	// 					markers[prev.placeId].deactiveMarker()
	// 				}
	// 				return data
	// 			})

	// 			ref.current = data.placeId

	// 			if (markers) {
	// 				markers[data.placeId].activeMarker(data.tech)
	// 			}
	// 		} catch {
	// 			alert('Error')
	// 		} finally {
	// 			setLoading2(false)
	// 		}
	// 	}

	// 	offerFetch()
	// }, [slug])

	// useEffect(
	// 	() => () => {
	// 		document
	// 			.getElementById(ref.current)
	// 			.classList.remove('active_marker')
	// 	},
	// 	[]
	// )

	// const createMarkup = () => ({
	// 	__html: offer && offer.description,
	// })

	return (
		// offer &&
		<Container>
			<ContainerScroll>
				{
					// loading || loading2 ? (
					// 	<ProgressWrapper>
					// 		<CircularProgress size='30px' />
					// 	</ProgressWrapper>
					// ) :
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
										<Img
											src={`${BASE_URL}${offer.image}`}
										/>
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
								<InfoLabel
									icon={1}
									title={offer.companyName}
								/>
								<InfoLabel
									icon={2}
									title={offer.companySize}
								/>
								<InfoLabel
									icon={3}
									title={offer.empType}
								/>
								<InfoLabel
									icon={4}
									title={offer.expLvl}
								/>
								<InfoLabel
									icon={5}
									title={offer.dateAdd}
								/>
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
				}
			</ContainerScroll>
		</Container>
	)
}
const Container = styled.div`
	flex: 1;
	background: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
	padding: 0 1.25em;
	position: relative;
	flex: 1 1 0%;
`
const ContainerScroll = styled.div`
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
const HeaderContainer = styled.div`
	height: 235px;
	position: relative;
	margin: 0 0 3.125em 0;
`
const HeaderInner = styled.div`
	background: url(https://justjoin.it/static/media/header_background.0ef18c97.png)
			center center / cover no-repeat,
		${({ theme, tech }: { theme: any; tech: any }) =>
			theme.techColors[tech]};
	height: 100%;
	border-radius: 0px 0px 4px 4px;
	padding: 2.5em 2.5em 2.5em;
	position: relative;
`
const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	align-content: flex-start;
	justify-content: center;
`
const ImgBackground = styled.div`
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
const Img = styled.img`
	max-width: 70px;
	max-height: 45px;
`
const MainInfoContainer = styled.div`
	flex: 1;
	margin: 0 0 0 2.5em;
`
const InfoLabelsContainer = styled.div`
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
const TechStackContainer = styled.div`
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
const Wrapper = styled.div`
	padding: 1.5em;
	border-top: 2px solid ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-wrap: wrap;
`
const DescriptionContainer = styled.div`
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
const DescriptionContent = styled.div`
	padding: 0 0.9375em;
	color: ${({ theme }) => theme.colors.title};
`
const ProgressWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 2.5em;
`

const ApplyContainer = styled.div`
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

const HeaderActionIcon = styled.button`
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
	left: ${({ arrow }: { arrow: any }) => (arrow ? '10px' : '')};
	right: ${({ arrow }: { arrow: any }) => (arrow ? '' : '10px')};
	padding: 2px;
	border: none;
	border-radius: 4px;
	transition: all 300ms ease-out 0s;
	&:hover {
		background: rgba(0, 0, 0, 0.35);
	}
`

const mapStateToProps = (state: InitialStoreState) => ({ state })

export default connect(mapStateToProps, {
	setGoogleMap,
	setMarkers,
	setMarkerClass,
	setParams,
	setOffersList,
})(SingleOffer)
