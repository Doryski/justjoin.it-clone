import React, { useState } from 'react'
import CustomButton from '../CustomButton'
import DialogComponent from './DialogComponent'
import { InitialStoreState } from '../../../store/reducer'
import { connect } from 'react-redux'
import { Tune } from '@material-ui/icons'
import Typography from '../../../helpers/Typography'

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
				margin='5px 5px 5px 10px'
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
