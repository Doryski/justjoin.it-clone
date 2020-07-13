import React, { useState } from 'react'
import CustomButton from './CustomButton'
import DialogComponent from './MoreFiltersModal/DialogComponent'
import { InitialStoreState } from '../../store/reducer'
import { connect } from 'react-redux'

const MoreFilters = ({ params }) => {
	const [dialogOpen, setDialogOpen] = useState(false)

	return (
		<>
			<CustomButton
				onclick={() => {
					setDialogOpen(true)
				}}
				active={params.expLvl || params.from || params.to}
				icon
				margin='5px'
			>
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
