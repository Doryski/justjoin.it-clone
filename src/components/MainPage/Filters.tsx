import React from 'react'
import styled from 'styled-components'
import LocationFilters from '../shared/LocationFilters'
import MoreFilters from '../shared/MoreFiltersModal/MoreFilters'
import TechFilters from '../shared/TechFilters'
import InputFilter from '../shared/InputFilter'

const Filters = () => {
	return (
		<Container>
			<InputFilter />
			<Wrapper>
				<LocationFilters />
				<TechFilters />
			</Wrapper>
			<MoreFilters />
		</Container>
	)
}
const Container = styled.div`
	min-height: 68px;
	background: ${({ theme }) => theme.colors.primary};
	display: flex;
	align-items: center;
	padding: 14px 15px 10px 19px;
`

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	padding-left: 4px;
	justify-content: space-between;
	align-items: flex-start;
	flex: 1 1 0%;
	flex-flow: row nowrap;
`

export default Filters
