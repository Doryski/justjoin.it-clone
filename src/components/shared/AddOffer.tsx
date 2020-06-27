import React, { useState } from 'react'
import PinkButton from './PinkButton'
import AddOfferModal from './AddOfferModal'

const AddOffer = () => {
	const [dialogOpen, setDialogOpen] = useState(false)

	return (
		<>
			<PinkButton onclick={() => setDialogOpen(true)}>
				Add offer
			</PinkButton>
			<AddOfferModal
				dialogOpen={dialogOpen}
				setDialogOpen={setDialogOpen}
			/>
		</>
	)
}

export default AddOffer
