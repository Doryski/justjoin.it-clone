import React, { useEffect } from 'react'
import styled from 'styled-components'
import OfferCard from '../OfferCard'
import { connect } from 'react-redux'
import {
	setMarkers,
	setGoogleMap,
	setOffersList,
	setMarkerClass,
	setParams,
} from '../../store/actions'
import {
	locationArray,
	expLvlArray,
	techArray,
	sortArray,
	sortOptions,
} from '../../helpers/options'
import _, { isNull, isUndefined } from 'lodash'
import CircularProgress from '@material-ui/core/CircularProgress'
import { InitialStoreState, OfferType } from '../../store/reducer'
import ListHeader from './ListHeader'
import offerListDemo from '../Map/offerListDemo'
import moment from 'moment'

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
	state: {
		params,
		loading,
		markers,
		allOffers,
		markerClass,
		offersList,
	},
}: OfferListProps) => {
	// let sort =
	// 	new URLSearchParams(useLocation().search).get('sort') || null
	// let { location, tech, from, to, expLvl } = useParams()

	// const getNum = (string: string) => +string.split('k')[0]
	// const params = {
	// 	location: locationArray.includes(String(location))
	// 		? location
	// 		: null,
	// 	tech: techArray.includes(String(tech)) ? tech : null,
	// 	expLvl: expLvlArray.includes(String(expLvl)) ? expLvl : null,
	// 	from:
	// 		from && getNum(from) && getNum(from) > 0
	// 			? getNum(from) * 1000
	// 			: null,
	// 	to:
	// 		to && getNum(to) && getNum(to) > 0
	// 			? getNum(to) * 1000
	// 			: null,
	// 	sort: sortArray.includes(String(sort)) ? sort : null,
	// }

	// useEffect(() => {
	// 	if (!loading && _.isEmpty(markers)) {
	// 		const map = new global.google.maps.Map(
	// 			document.getElementById('map'),
	// 			initMapOptions()
	// 		)

	// 		const markers = {}

	// 		const CustomMarker = createHTMLMapMarker(history)

	// 		let list: any[] = []

	// 		allOffers.forEach((item: any) => {
	// 			list = list.concat(item.offers)
	// 			markers[item.placeId] = new CustomMarker(
	// 				item,
	// 				map,
	// 				params
	// 			)
	// 		})

	// 		setGoogleMap(map)
	// 		setMarkers(markers)
	// 		setParams(params)
	// 		setMarkerClass(CustomMarker)
	// 		setOffersList(list)

	// 		localStorage.setItem('params', JSON.stringify(params))
	// 	} else if (!_.isEmpty(markers)) {
	// 		_.forEach(markers, (item: any) => {
	// 			item.update(params)

	// 			setParams(params)
	// 			localStorage.setItem('params', JSON.stringify(params))
	// 		})
	// 	}
	// }, [location, tech, from, to, expLvl, loading, sort])

	const filteredOfferList = offerListDemo.filter(
		offer =>
			offer.city === params.location &&
			!isNull(params.from) &&
			!isUndefined(params.from) &&
			offer.salaryFrom >= params.from &&
			!isNull(params.to) &&
			!isUndefined(params.to) &&
			offer.salaryTo <= params.to &&
			offer.tech === params.tech
	)
	const sortedOfferList = filteredOfferList.sort((a, b) => {
		if (params.sort === sortOptions.salaryUp.id)
			return a.salaryFrom > b.salaryFrom ? 1 : -1
		if (params.sort === sortOptions.salaryDown.id)
			return a.salaryFrom > b.salaryFrom ? 1 : -1
		return moment(a.dateAdd).diff(moment(b.dateAdd)) > 0 ? 1 : -1
	})

	return (
		<Container>
			<ListHeader />
			<ContainerScroll>
				<ListContainer>
					{
					// loading ? (
					// 	<ProgressWrapper>
					// 		<CircularProgress size='30px' />
					// 	</ProgressWrapper>
					// ) : (
						offerListDemo.map((offer: OfferType) => (
							<OfferCard
								key={offer.slug}
								offer={offer}
							/>
						))
					// )
					}
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

const ListContainer = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
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
