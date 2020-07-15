import React from 'react'
import CustomButton from './CustomButton'
import styled from 'styled-components'
import PinkButton from './PinkButton'
import url from '../../helpers/urlFunc'
import MAX_SLIDER_VALUE from '../../helpers/maxSliderValue'
import { ParamsType } from '../../store/reducer'
import { Link } from 'react-router-dom'

type DialogFooterProps = {
	params: ParamsType
	onClose: VoidFunction
	expLvl?: string
	location?: string
	value?: number[]
	filterType: string
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
		if (filterType === 'expLvl') {
			clearFilters = url({ ...params, expLvl: null })
			showOffers = url({
				...params,
				expLvl,
				from: value[0],
				to: value[1] === MAX_SLIDER_VALUE ? null : value[1],
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
			<Link
				to={generateLinks().clearFilters}
				onClick={onClose}
			>
				<CustomButton padding='8px 30px'>
					Clear filters
				</CustomButton>
			</Link>

			<Link
				to={generateLinks().showOffers}
				onClick={onClose}
			>
				<PinkButton>Show offers</PinkButton>
			</Link>
		</BottomWrapper>
	)
}

const BottomWrapper = styled.div`
	padding: 15px 20px;
	display: flex;
	justify-content: space-between;
	border-top: 1px solid ${({ theme }) => theme.colors.divider};
`

export default DialogFooter
