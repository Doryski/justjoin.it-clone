import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import createUrl from '../../helpers/createUrl'
import { InitialStoreState } from '../../store/reducer'
import { Link as RouteLink } from 'react-router-dom'
import { DropdownList, DropdownListItem } from './DropdownList'
import Typography from '../../helpers/Typography'
import { sortOptions } from '../../helpers/options'
import { MyExpandMoreIcon } from './CustomButton'
import { setParams } from '../../store/actions'

const SortFilter = ({ params, setParams }) => {
	const [listOpen, setListOpen] = useState(false)
	const handleListClick = () => ({
		open: setListOpen(true),
		close: setListOpen(false),
		toggle: setListOpen(!listOpen),
	})

	const getCurrentSortOption = () =>
		params.sort === sortOptions.salaryUp.id
			? sortOptions.salaryUp
			: params.sort === sortOptions.salaryDown.id
			? sortOptions.salaryDown
			: sortOptions.dateLatest

	const newParams = {
		salaryDown: {
			...params,
			sort: sortOptions.salaryDown.id,
		},
		salaryUp: {
			...params,
			sort: sortOptions.salaryUp.id,
		},
		dateLatest: {
			...params,
			sort: sortOptions.dateLatest.id,
		},
	}

	return (
		<ButtonWrapper onClick={() => handleListClick().toggle}>
			<Typography color='span'>Sort by:</Typography>
			<Typography color='text' margin='0 .25em 0 .5em'>
				{getCurrentSortOption().name}
			</Typography>
			<MyExpandMoreIcon isOpen={listOpen} />

			<DropdownList isOpen={listOpen}>
				<DropdownListItem>
					<Link
						to={createUrl(newParams.dateLatest)}
						onClick={() => {
							handleListClick().close
							setParams(newParams.dateLatest)
						}}
					>
						<Typography color='text' align='left'>
							{sortOptions.dateLatest.name}
						</Typography>
					</Link>
				</DropdownListItem>
				<DropdownListItem>
					<Link
						to={createUrl(newParams.salaryDown)}
						onClick={() => {
							handleListClick().close
							setParams(newParams.salaryDown)
						}}
					>
						<Typography color='text' align='left'>
							{sortOptions.salaryDown.name}
						</Typography>
					</Link>
				</DropdownListItem>
				<DropdownListItem>
					<Link
						to={createUrl(newParams.salaryUp)}
						onClick={() => {
							handleListClick().close
							setParams(newParams.salaryUp)
						}}
					>
						<Typography color='text' align='left'>
							{sortOptions.salaryUp.name}
						</Typography>
					</Link>
				</DropdownListItem>
			</DropdownList>
		</ButtonWrapper>
	)
}
const ButtonWrapper = styled.div`
	margin: 0 0.3125em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
`
const Link = styled(RouteLink)`
	padding: 0.5em 0.7em;
	width: 100%;
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps, { setParams })(SortFilter)
