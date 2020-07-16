import React, { useState } from 'react'
import CustomButton from '../CustomButton'
import DialogComponent from './DialogComponent'
import { InitialStoreState, ParamsType } from '../../../store/reducer'
import { connect } from 'react-redux'
import { Tune } from '@material-ui/icons'

const MoreFilters = ({ params }: { params: ParamsType }) => {
	const [dialogOpen, setDialogOpen] = useState(false)

	return (
		<>
			<CustomButton
				onclick={() => {
					setDialogOpen(true)
				}}
				active={
					Boolean(params.expLvl) ||
					Boolean(params.from) ||
					Boolean(params.to)
				}
				icon
				margin='0.3125em 0.3125em 0.3125em 0.625em'
				minWidth='158px'
			>
				<Tune fontSize='small' />
				More filters
			</CustomButton>
			{dialogOpen && (
				<DialogComponent
					params={params}
					dialogOpen={dialogOpen}
					setDialogOpen={setDialogOpen}
				/>
			)}
		</>
	)
}

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps)(MoreFilters)
