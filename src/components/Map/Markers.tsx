import React, { useState } from 'react'
import Overlay from 'pigeon-overlay'
import { latlngOptions } from '../../helpers/options'
import offerListDemo from './offerListDemo'
import { useHistory } from 'react-router-dom'
import TechSvg from '../shared/TechSvg'
import Tooltip from './Tooltip'

const Markers = () => {
	const [mouseOver, setMouseOver] = useState(false)
	const history = useHistory()

	return (
		<>
			{offerListDemo.slice(0, 1).map(offer => (
				<Overlay
					key={offer.slug}
					anchor={latlngOptions[offer.city]}
					offset={mouseOver ? [20, 110] : [20, 20]}
					style={{ cursor: 'pointer' }}
					// onBoundsChanged={({
					// 	center,
					// 	zoom,
					// 	bounds,
					// 	initial,
					// }) => {}}
					// onHover={() => {
					// 	showTooltip(offer.id)
					// }}
				>
					{mouseOver && <Tooltip offer={offer} />}
					<div
						onMouseOver={() => {
							setMouseOver(true)
						}}
						onMouseOut={() => {
							setMouseOver(false)
						}}
						onClick={() => {
							history.push(`/offers/${offer.slug}`)
							//  centerMap(offer.placeId) // or offer.city
						}}
					>
						<TechSvg tech={offer.tech} />
					</div>
				</Overlay>
			))}
		</>
	)
}

export default Markers
