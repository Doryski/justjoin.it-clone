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
				margin='0 12px 0 6px'
				padding='8px 16px'
			>
				Post a job
			</CustomButton>
			<AddOfferModal
				dialogOpen={dialogOpen}
				setDialogOpen={setDialogOpen}
			/>
		</>
	)
}

export default AddOffer
