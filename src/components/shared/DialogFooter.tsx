import React from 'react'
import CustomButton from './CustomButton'
import styled from 'styled-components'
import createUrl from '../../helpers/createUrl'
import MAX_SLIDER_VALUE from '../../helpers/maxSliderValue'
import { ParamsType, InitialStoreState } from '../../store/reducer'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setParams } from '../../store/actions'
import stringFormat from '../../helpers/stringFormat'

type DialogFooterProps = {
	params: ParamsType
	onClose: VoidFunction
	expLvl?: ParamsType['expLvl']
	location?: ParamsType['location']
	setLocation?: React.Dispatch<
		React.SetStateAction<ParamsType['location']>
	>
	value?: number[] | number
	filterType: 'expLvl' | 'location'
	setParams: (params: ParamsType) => void
}

const DialogFooter = ({
	params,
	onClose,
	expLvl,
	location,
	setLocation,
	value,
	filterType,
	setParams,
}: DialogFooterProps) => {
	const loc = stringFormat(location)
	const val0 = value instanceof Array ? value[0] : value
	const val1 = value instanceof Array ? value[1] : value

	function getParams() {
		let clearFilters: ParamsType = { ...params }
		let showOffers: ParamsType = { ...params }
		if (filterType === 'expLvl') {
			clearFilters = { ...params, expLvl: null, search: null }
			showOffers = {
				...params,
				expLvl,
				from: val0,
				to: val1 === MAX_SLIDER_VALUE ? null : val1,
				search: null,
			}
		} else if (filterType === 'location') {
			clearFilters = { ...params, location: null, search: null }
			showOffers = {
				...params,
				location: loc || params.location,
				search: null,
			}
		}

		return { clearFilters, showOffers }
	}

	return (
		<BottomWrapper>
			<Link
				to={createUrl(getParams().clearFilters)}
				onClick={() => {
					setParams(getParams().clearFilters)
					onClose()
					setLocation && setLocation(null)
				}}
			>
				<CustomButton padding='0.5em 1.875em'>
					Clear filters
				</CustomButton>
			</Link>

			<Link
				to={createUrl(getParams().showOffers)}
				onClick={() => {
					setParams(getParams().showOffers)
					onClose()
				}}
			>
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

export const BottomWrapper = styled.div`
	padding: 0.9375em 1.25em;
	display: flex;
	justify-content: space-between;
	border-top: 1px solid ${({ theme }) => theme.colors.divider};
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps, { setParams })(DialogFooter)
