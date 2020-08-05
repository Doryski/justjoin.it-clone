import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Map from 'pigeon-maps'
import Overlay from 'pigeon-overlay'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import TechSvg from '../shared/TechSvg'
import latlngOptions from '../../helpers/latLngOptions'
import stringFormat from '../../helpers/stringFormat'
import isDefined from '../../helpers/isDefined'
import mapTilerProvider from './mapTilerProvider'
import Tooltip from './Tooltip'
import InitialStoreState from '../../types/InitialStoreState'
import ParamsType from '../../types/ParamsType'
import { setMap } from '../../store/actions'

const MapWrapper = ({
	params,
	offers,
	map,
}: {
	params: ParamsType
	offers: InitialStoreState['offers']
	map: InitialStoreState['map']
}) => {
	const [mouseOver, setMouseOver] = useState<{
		slug: string | null
		state: boolean
	}>({
		slug: null,
		state: false,
	})
	const history = useHistory()

	useEffect(() => {
		const coordinates = isDefined(params.location)
			? // @ts-ignore
			  latlngOptions[params.location]
			: latlngOptions.poland

		const zoom =
			!isDefined(params.location) ||
			params.location === 'poland'
				? 6
				: 10
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
							// @ts-ignore
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
											// @ts-ignore
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

export default connect(mapStateToProps)(MapWrapper)
