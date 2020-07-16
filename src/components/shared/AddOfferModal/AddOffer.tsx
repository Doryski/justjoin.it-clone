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
				margin='0 0.75em 0 0.375em'
				padding='0.5em 1em'
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
