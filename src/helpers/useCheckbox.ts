import { useState } from 'react'

export default function useCheckbox(initialState: boolean) {
	const [isChecked, setIsChecked] = useState(initialState)

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => setIsChecked(event.target.checked)

	return { isChecked, setIsChecked, handleChange }
}
