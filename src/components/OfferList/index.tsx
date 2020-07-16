import React, { useEffect } from 'react'
import styled from 'styled-components'
import Label from '../shared/Label'
import SortFilter from '../shared/SortFilter'
import OfferCard from '../shared/OfferCard'
import { useParams, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import {
	setMarkers,
	setGoogleMap,
	setOffersList,
	setMarkerClass,
	setParams,
} from '../../store/actions'
import createHTMLMapMarker from '../../GoogleMapMarker'
import {
	locationArray,
	expLvlArray,
	techArray,
	sortArray,
} from '../../helpers/options'
import { initMapOptions } from '../../googleMapOptions'
import _ from 'lodash'
import CircularProgress from '@material-ui/core/CircularProgress'
import { InitialStoreState, Offer } from '../../store/reducer'

type OfferListProps = {
	history: any
	setMarkers: Function
	setMarkerClass: Function
	setParams: Function
	setGoogleMap: Function
	setOffersList: Function
	state: InitialStoreState
}

const OfferList = ({
	history,
	setMarkers,
	setMarkerClass,
	setParams,
	setGoogleMap,
	setOffersList,
	state: { loading, markers, allOffers, markerClass, offersList },
}: OfferListProps) => {
	let sort =
		new URLSearchParams(useLocation().search).get('sort') || null
	let { location, tech, from, to, expLvl } = useParams()

	const getNum = (string: string) => +string.split('k')[0]
	const params = {
		location: locationArray.includes(String(location))
			? location
			: null,
		tech: techArray.includes(String(tech)) ? tech : null,
		expLvl: expLvlArray.includes(String(expLvl)) ? expLvl : null,
		from:
			from && getNum(from) && getNum(from) > 0
				? getNum(from) * 1000
				: null,
		to:
			to && getNum(to) && getNum(to) > 0
				? getNum(to) * 1000
				: null,
		sort: sortArray.includes(String(sort)) ? sort : null,
	}

	useEffect(() => {
		if (!loading && _.isEmpty(markers)) {
			const map = new global.google.maps.Map(
				document.getElementById('map'),
				initMapOptions()
			)

			const markers = {}

			const CustomMarker = createHTMLMapMarker(history)

			let list: any[] = []

			allOffers.forEach((item: any) => {
				list = list.concat(item.offers)
				markers[item.placeId] = new CustomMarker(
					item,
					map,
					params
				)
			})

			setGoogleMap(map)
			setMarkers(markers)
			setParams(params)
			setMarkerClass(CustomMarker)
			setOffersList(list)

			localStorage.setItem('params', JSON.stringify(params))
		} else if (!_.isEmpty(markers)) {
			_.forEach(markers, (item: any) => {
				item.update(params)

				setParams(params)
				localStorage.setItem('params', JSON.stringify(params))
			})
		}
	}, [location, tech, from, to, expLvl, loading, sort])

	return (
		<Container>
			<FiltersWrapper>
				<SalaryFiltersWrapper>
					<Label active>All offers</Label>
				</SalaryFiltersWrapper>
				<SortFiltersWrapper>
					<SortFilter />
				</SortFiltersWrapper>
			</FiltersWrapper>
			<ContainerScroll>
				<ListContainer>
					{loading && (
						<ProgressWrapper>
							<CircularProgress size='30px' />
						</ProgressWrapper>
					)}
					{offersList &&
						markerClass.prototype
							.filterOffers(offersList, params)
							.map((item: OfferCard, index: string) => {
								return (
									<OfferCard
										key={item.slug}
										slug={item.slug}
										tech={item.tech}
										title={item.offerTitle}
										companyName={item.companyName}
										city={item.city}
										from={item.salaryFrom}
										to={item.salaryTo}
										image={item.image}
										technology={item.technology}
										placeId={item.placeId}
										dateAdd={item.dateAdd}
									/>
								)
							})}
				</ListContainer>
			</ContainerScroll>
		</Container>
	)
}
const Container = styled.div`
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
`
const ContainerScroll = styled.div`
	display: flex;
	position: relative;
	flex: 1 1 0%;
`
const FiltersWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primary};
	display: flex;
	margin-bottom: 0.3125em;
`
const SalaryFiltersWrapper = styled.div`
	padding-left: 1.5625em;
	display: flex;
`
const SortFiltersWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	padding: 0.1875em;
`
const ListContainer = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	padding: 0 0.9375em;
	overflow: auto;

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.md}) {
		padding: 0;
	}
`
const InfoSpan = styled.span`
	display: block;
	color: ${({ theme }) => theme.colors.title};
	font-size: 1.2rem;
`
const ProgressWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 2.5em;
`

const mapStateToProps = (state: InitialStoreState) => ({ state })

export default connect(mapStateToProps, {
	setGoogleMap,
	setMarkers,
	setMarkerClass,
	setParams,
	setOffersList,
})(OfferList)
