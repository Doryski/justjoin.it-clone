import React, { useEffect } from 'react'
import styled from 'styled-components'
import Label from '../shared/Label'
import SortFilter from '../shared/SortFilter'
import OffertCard from '../shared/OfferCard'
import { useParams, useLocation, Link } from 'react-router-dom'
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
} from '../../helpers/Options'
import { initMapOptions } from '../../googleMapOptions'
import _ from 'lodash'
import CircularProgress from '@material-ui/core/CircularProgress'
import { InitialStoreState } from '../../store/reducer'

interface OfferListProps {
	history: any
	setMarkers: any
	setMarkerClass: any
	setParams: any
	setGoogleMap: any
	setOffersList: any
	state: {
		loading: any
		markers: any
		allOffers: any
		markerClass: any
		offersList: any
	}
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
	let sort = new URLSearchParams(useLocation().search).get('sort')
	let { location, tech, from, to, expLvl } = useParams()

	const getNum = (string: string) => +string.split('k')[0]
	const params = {
		location: locationArray.includes(location) ? location : null,
		tech: techArray.includes(tech) ? tech : null,
		expLvl: expLvlArray.includes(expLvl) ? expLvl : null,
		from:
			from && getNum(from) && getNum(from) > 0
				? getNum(from) * 1000
				: null,
		to:
			to && getNum(to) && getNum(to) > 0
				? getNum(to) * 1000
				: null,
		sort: sortArray.includes(sort) ? sort : null,
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
				list = list.concat(item.offerts)
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
					<Label active>All offerts</Label>
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
							.map((item: any, index: any) => {
								return (
									<OffertCard
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
	margin-bottom: 5px;
`
const SalaryFiltersWrapper = styled.div`
	padding-left: 25px;
	display: flex;
`
const SortFiltersWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	padding: 3px;
`
const ListContainer = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	padding: 0 15px;
	overflow: auto;

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.md}) {
		padding: 0;
	}
`
const InfoSpan = styled.span`
	display: block;
	color: ${({ theme }) => theme.colors.logo};
	font-size: 1.2rem;
`
const ProgressWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 40px;
`

const mapStateToProps = (state: InitialStoreState) => ({ state })

export default connect(mapStateToProps, {
	setGoogleMap,
	setMarkers,
	setMarkerClass,
	setParams,
	setOffersList,
})(OfferList)
