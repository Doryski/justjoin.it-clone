import React, { useState } from 'react'
import CustomButton from '../CustomButton'
import AddOfferModal from '.'
import theme from '../../../theme'

const AddOffer = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const handleDialog = {
		open: () => setIsDialogOpen(true),
		close: () => setIsDialogOpen(false),
		toggle: () => setIsDialogOpen(!isDialogOpen),
	}
	return (
		<>
			<CustomButton
				fWeight={theme.fontWeight[400]}
				onclick={handleDialog.open}
				margin='0 0.875em 0 0.375em'
				padding='0.625em 1.125em'
			>
				Post a Job
			</CustomButton>
			<AddOfferModal
				isDialogOpen={isDialogOpen}
				handleDialog={handleDialog}
			/>
		</>
	)
}

export default AddOffer
