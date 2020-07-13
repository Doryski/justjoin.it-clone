import React from 'react'
import CustomButton from './CustomButton'
import styled from 'styled-components'
import PinkButton from './PinkButton'
import StyledLink from '../../helpers/StyledLink'
import url from '../../helpers/urlFunc'
import MAX_SLIDER_VALUE from '../../helpers/maxSliderValue'

interface DialogFooterProps {
	params: any
	onClose: any
	expLvl?: string
	location?: string
	value?: any
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
			<StyledLink
				to={generateLinks().clearFilters}
				onClick={onClose}
			>
				<CustomButton padding='8px 30px'>
					Clear filters
				</CustomButton>
			</StyledLink>

			<StyledLink
				to={generateLinks().showOffers}
				onClick={onClose}
			>
				<PinkButton>Show offers</PinkButton>
			</StyledLink>
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
