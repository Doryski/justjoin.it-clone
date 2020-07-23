import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Map from 'pigeon-maps'
import { InitialStoreState, ParamsType } from '../../store/reducer'
import { connect } from 'react-redux'
import { latlngOptions } from '../../helpers/options'
import { isUndefined, isNull } from 'lodash'
import mapTilerProvider from './mapTilerProvider'
import Markers from './Markers'

const MapWrapper = ({ params }: { params: ParamsType }) => {
	const [coordinates, setCoordinates] = useState(
		latlngOptions.poland
	)
	const [zoom, setZoom] = useState(6)

	useEffect(() => {
		const isLocationDefined =
			!isNull(params.location) && !isUndefined(params.location)

		setCoordinates(
			isLocationDefined
				? // @ts-ignore
				  latlngOptions[params.location]
				: latlngOptions.poland
		)
		setZoom(
			!isLocationDefined || params.location === 'poland'
				? 6
				: 10
		)
	}, [params.location])

	return (
		<Container>
			<Map
				provider={mapTilerProvider}
				dprs={[1, 2]}
				center={coordinates}
				zoom={zoom}
			>
				<Markers />
			</Map>
		</Container>
	)
}

const Container = styled.div`
	flex: 1;
	height: 100%;
	@media (max-width: 1025px) {
		display: none;
	}
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps)(MapWrapper)
