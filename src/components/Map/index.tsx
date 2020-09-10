import React, { useState, useEffect, lazy } from 'react'
import styled from 'styled-components'
import Map from 'pigeon-maps'
import Overlay from 'pigeon-overlay'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import TechSvg from '../shared/TechSvg'
import latlngOptions from '../../helpers/latLngOptions'
import stringFormat from '../../helpers/stringFormat'
import mapTilerProvider from './mapTilerProvider'
import InitialStoreState from '../../types/InitialStoreState'
import { setMap } from '../../store/actions'
import Tooltip from './Tooltip'

type MouseOverType = {
	slug: string | null
	state: boolean
}

type MapWrapperProps = {
	params: InitialStoreState['params']
	offers: InitialStoreState['offers']
	map: InitialStoreState['map']
	setMap(map: InitialStoreState['map']): void
}

const MapWrapper = ({
	params,
	offers,
	map,
	setMap,
}: MapWrapperProps) => {
	const [mouseOver, setMouseOver] = useState<MouseOverType>({
		slug: null,
		state: false,
	})
	const history = useHistory()

	useEffect(() => {
		const coordinates = !!params.location
			? latlngOptions[params.location]
			: latlngOptions.poland

		const zoom =
			!params.location || params.location === 'poland' ? 6 : 10
		setMap({ coordinates, zoom })
	}, [params.location])

	return (
		<Container>
			<Map
				provider={mapTilerProvider}
				dprs={[1, 2]}
				center={map.coordinates}
				zoom={map.zoom}
			>
				{offers.map(offer => (
					<Overlay
						key={offer.slug}
						anchor={
							latlngOptions[stringFormat(offer.city)]
						}
						offset={
							mouseOver.state &&
							mouseOver.slug == offer.slug
								? [20, 110]
								: [20, 20]
						}
						style={{ cursor: 'pointer' }}
					>
						{mouseOver.state &&
							mouseOver.slug == offer.slug && (
								<Tooltip offer={offer} />
							)}
						<div
							onMouseOver={() => {
								setMouseOver({
									slug: offer.slug,
									state: true,
								})
							}}
							onMouseOut={() => {
								setMouseOver({
									slug: offer.slug,
									state: false,
								})
							}}
							onClick={() => {
								history.push(`/offers/${offer.slug}`)
								setMap({
									...map,
									coordinates:
										latlngOptions[
											stringFormat(offer.city)
										],
								})
							}}
						>
							<TechSvg tech={offer.tech} />
						</div>
					</Overlay>
				))}
			</Map>
		</Container>
	)
}

export const Container = styled.div`
	flex: 1;
	height: 100%;
	@media (max-width: 1025px) {
		display: none;
	}
`

const mapStateToProps = ({
	params,
	offers,
	map,
}: InitialStoreState) => ({
	params,
	offers,
	map,
})

export default connect(mapStateToProps, { setMap })(MapWrapper)
