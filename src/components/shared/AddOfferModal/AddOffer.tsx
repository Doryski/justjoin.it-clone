import React, { useState } from 'react'
import CustomButton from '../CustomButton'
import AddOfferModal from '.'

const AddOffer = () => {
	const [dialogOpen, setDialogOpen] = useState(false)
	const handleDialog = {
		open: () => setDialogOpen(true),
		close: () => setDialogOpen(false),
	}
	return (
		<>
			<CustomButton
				fWeight='400'
				onclick={handleDialog.open}
				margin='0 0.875em 0 0.375em'
				padding='0.625em 1.125em'
			>
				Post a Job
			</CustomButton>
			<AddOfferModal
				dialogOpen={dialogOpen}
				handleDialog={handleDialog}
			/>
		</>
	)
}

export default AddOffer
