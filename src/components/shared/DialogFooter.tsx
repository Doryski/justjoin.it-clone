import React from 'react'
import CustomButton from './CustomButton'
import styled from 'styled-components'
import url from '../../helpers/urlFunc'
import MAX_SLIDER_VALUE from '../../helpers/maxSliderValue'
import { ParamsType } from '../../store/reducer'
import { Link } from 'react-router-dom'

type DialogFooterProps = {
	params: ParamsType
	onClose: VoidFunction
	expLvl?: ParamsType['expLvl']
	location?: ParamsType['location']
	value?: number[] | number
	filterType: 'expLvl' | 'location'
}

const DialogFooter = ({
	params,
	onClose,
	expLvl,
	location,
	value,
	filterType,
}: DialogFooterProps) => {
	function generateLinks() {
		let clearFilters: string = url({ ...params })
		let showOffers: string = url({ ...params })
		const val0 = value instanceof Array ? value[0] : value
		const val1 = value instanceof Array ? value[1] : value
		if (filterType === 'expLvl') {
			clearFilters = url({ ...params, expLvl: null })
			showOffers = url({
				...params,
				expLvl,
				from: val0,
				to: val1 === MAX_SLIDER_VALUE ? null : val1,
			})
		} else if (filterType === 'location') {
			clearFilters = url({ ...params, location: null })
			showOffers = url({
				...params,
				location: location || params.location,
			})
		}

		return { clearFilters, showOffers }
	}

	return (
		<BottomWrapper>
			<Link to={generateLinks().clearFilters} onClick={onClose}>
				<CustomButton padding='0.5em 1.875em'>
					Clear filters
				</CustomButton>
			</Link>

			<Link to={generateLinks().showOffers} onClick={onClose}>
				<CustomButton
					padding='0.5em 1.125em'
					pink
					fWeight='600'
					margin='0 0.625em'
				>
					Show offers
				</CustomButton>
			</Link>
		</BottomWrapper>
	)
}

const BottomWrapper = styled.div`
	padding: 0.9375em 1.25em;
	display: flex;
	justify-content: space-between;
	border-top: 1px solid ${({ theme }) => theme.colors.divider};
`

export default DialogFooter
