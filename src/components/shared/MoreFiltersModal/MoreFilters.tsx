import React, { useState } from 'react'
import CustomButton from '../CustomButton'
import DialogComponent from './DialogComponent'
import { InitialStoreState, ParamsType } from '../../../store/reducer'
import { connect } from 'react-redux'
import { Tune } from '@material-ui/icons'
import Typography from '../../../helpers/Typography'
import styled from 'styled-components'

const MoreFilters = ({ params }: { params: ParamsType }) => {
	const [dialogOpen, setDialogOpen] = useState(false)

	const isActive = !!params.expLvl || !!params.from || !!params.to

	const bothFiltersApplied =
		!!params.expLvl && (!!params.from || !!params.to)

	const filtersApplied = isActive && bothFiltersApplied ? 2 : 1

	return (
		<>
			<CustomButton
				onclick={() => {
					setDialogOpen(true)
				}}
				active={isActive}
				icon
				isOpen={dialogOpen}
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
					color={isActive ? 'pink' : 'text'}
					// @ts-ignore
					fontSize='inherit'
					fWeight='inherit'
					margin={
						isActive ? '.125em 0 0 .5em' : '0 0 0 .5em'
					}
				>
					More filters
				</Typography>
			</CustomButton>
			{dialogOpen && (
				<DialogComponent
					dialogOpen={dialogOpen}
					setDialogOpen={setDialogOpen}
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
	color: rgb(255, 255, 255);
	margin-left: 0px;
	border-radius: 12px;
	background: rgb(255, 64, 129);
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps)(MoreFilters)
