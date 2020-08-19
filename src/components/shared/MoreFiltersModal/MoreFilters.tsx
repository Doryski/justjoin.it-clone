import React, { useState } from 'react'
import CustomButton from '../CustomButton'
import DialogComponent from './DialogComponent'
import { connect } from 'react-redux'
import { Tune } from '@material-ui/icons'
import Typography from '../Typography'
import styled from 'styled-components'
import ParamsType from '../../../types/ParamsType'
import InitialStoreState from '../../../types/InitialStoreState'
import { textColors } from '../../../theme'

const MoreFilters = ({ params }: { params: ParamsType }) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false)

	const isActive = !!params.expLvl || !!params.from || !!params.to

	const bothFiltersApplied =
		!!params.expLvl && (!!params.from || !!params.to)

	const filtersApplied = isActive && bothFiltersApplied ? 2 : 1

	const handleDialog = {
		open: () => {
			setIsDialogOpen(true)
		},
		close: () => {
			setIsDialogOpen(false)
		},
		toggle: () => {
			setIsDialogOpen(!isDialogOpen)
		},
	}

	return (
		<>
			<CustomButton
				onclick={handleDialog.open}
				active={isActive}
				icon
				isOpen={isDialogOpen}
				padding='0.375em 0.5em 0.375em 1em'
				margin='-0.75em 0.3125em 0.3125em 0.625em'
				minWidth='158px'
				display='flex'
			>
				{isActive ? (
					<Number>{filtersApplied}</Number>
				) : (
					<Tune fontSize='small' />
				)}
				<Typography
					color={
						isActive ? textColors.pink : textColors.text
					}
					fontSize='inherit'
					fWeight='inherit'
					margin={
						isActive ? '.125em 0 0 .5em' : '0 0 0 .5em'
					}
				>
					More filters
				</Typography>
			</CustomButton>
			{isDialogOpen && (
				<DialogComponent
					isDialogOpen={isDialogOpen}
					handleDialog={handleDialog}
				/>
			)}
		</>
	)
}

export const Number = styled.div`
	width: 24px;
	height: 24px;
	text-align: center;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.white};
	margin-left: 0px;
	border-radius: 12px;
	background: rgb(255, 64, 129);
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps)(MoreFilters)
