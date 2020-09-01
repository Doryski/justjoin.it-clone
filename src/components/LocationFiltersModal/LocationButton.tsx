import React from 'react'
import CustomButton from '../shared/CustomButton'
import styled from 'styled-components'
import stringFormat from '../../helpers/stringFormat'
import { connect } from 'react-redux'
import InitialStoreState from '../../types/InitialStoreState'
import ParamsType from '../../types/ParamsType'

interface LocationButtonProps {
	loc: string
	params: ParamsType
	setLocation: React.Dispatch<
		React.SetStateAction<ParamsType['location']>
	>
	location: ParamsType['location']
}

const LocationButton = ({
	loc,
	params,
	setLocation,
	location,
}: LocationButtonProps) => (
	<ItemWrapper key={loc}>
		<CustomButton
			handleClick={() => setLocation(loc)}
			active={
				location
					? loc === location
					: stringFormat(loc) === params.location
			}
			padding='0.5em 1.875em'
		>
			{loc}
		</CustomButton>
	</ItemWrapper>
)

export const ItemWrapper = styled.div`
	margin: 0.3125em;
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps)(LocationButton)
