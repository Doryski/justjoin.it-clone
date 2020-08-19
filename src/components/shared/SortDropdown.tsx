import React, { useState } from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setParams } from '../../store/actions'
import Typography from './Typography'
import sortOptions from '../../helpers/sortOptions'
import createUrl from '../../helpers/createUrl'
import { StyledExpandMoreIcon } from './CustomButton'
import { DropdownList, DropdownListItem } from './DropdownList'
import ParamsType from '../../types/ParamsType'
import InitialStoreState from '../../types/InitialStoreState'
import { textColors } from '../../theme'

const SortDropdown = ({
	params,
	setParams,
}: {
	params: ParamsType
	setParams: Function
}) => {
	const [isListOpen, setIsListOpen] = useState(false)
	const handleList = {
		open: () => setIsListOpen(true),
		close: () => setIsListOpen(false),
		toggle: () => setIsListOpen(!isListOpen),
	}

	const getCurrentSortOption =
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
		<ButtonWrapper onClick={handleList.toggle}>
			<Typography color={textColors.span}>Sort by:</Typography>
			<Typography
				color={textColors.span}
				margin='0 .25em 0 .5em'
			>
				{getCurrentSortOption.name}
			</Typography>
			<StyledExpandMoreIcon isOpen={isListOpen} />

			<DropdownList
				width='126px'
				isOpen={isListOpen}
				onMouseLeave={handleList.close}
			>
				<RouteLink
					to={createUrl(newParams.dateLatest)}
					onClick={() => {
						handleList.close()
						setParams(newParams.dateLatest)
					}}
				>
					<DropdownListItem>
						<Typography
							color={textColors.text}
							align='left'
							padding='0.5em 0.7em'
						>
							{sortOptions.dateLatest.name}
						</Typography>
					</DropdownListItem>
				</RouteLink>
				<RouteLink
					to={createUrl(newParams.salaryDown)}
					onClick={() => {
						handleList.close()
						setParams(newParams.salaryDown)
					}}
				>
					<DropdownListItem>
						<Typography
							color={textColors.text}
							align='left'
							padding='0.5em 0.7em'
						>
							{sortOptions.salaryDown.name}
						</Typography>
					</DropdownListItem>
				</RouteLink>
				<RouteLink
					to={createUrl(newParams.salaryUp)}
					onClick={() => {
						handleList.close()
						setParams(newParams.salaryUp)
					}}
				>
					<DropdownListItem>
						<Typography
							color={textColors.text}
							align='left'
							padding='0.5em 0.7em'
						>
							{sortOptions.salaryUp.name}
						</Typography>
					</DropdownListItem>
				</RouteLink>
			</DropdownList>
		</ButtonWrapper>
	)
}
export const ButtonWrapper = styled.div`
	margin: 0 0.3125em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps, { setParams })(SortDropdown)
