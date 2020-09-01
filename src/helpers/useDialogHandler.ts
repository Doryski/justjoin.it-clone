import { useState } from 'react'

export default function useDialogHandler(initialState: boolean) {
	const [isDialogOpen, setIsDialogOpen] = useState(initialState)

	return {
		open: () => setIsDialogOpen(true),
		close: () => setIsDialogOpen(false),
		toggle: () => setIsDialogOpen(!isDialogOpen),
		isDialogOpen,
	}
}
