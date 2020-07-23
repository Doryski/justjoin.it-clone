import React, { useState } from 'react'
import CustomButton from '../CustomButton'
import AddOfferModal from '.'

const AddOffer = () => {
	const [dialogOpen, setDialogOpen] = useState(false)

	return (
		<>
			<CustomButton
				fWeight='400'
				onclick={() => {
					setDialogOpen(true)
				}}
				margin='0 0.875em 0 0.375em'
				padding='0.625em 1.125em'
			>
				Post a Job
			</CustomButton>
			<AddOfferModal
				dialogOpen={dialogOpen}
				setDialogOpen={setDialogOpen}
			/>
		</>
	)
}

export default AddOffer
