import { useState, useEffect } from 'react'

function getSavedValue(initialValue: any, key: string) {
	const savedValue = JSON.parse(localStorage[key])
	if (savedValue) return savedValue

	if (initialValue instanceof Function) return initialValue()
	return initialValue
}

export default function useLocalStorage(
	initialValue: any,
	key: string
) {
	const [value, setValue] = useState(() => {
		return getSavedValue(initialValue, key)
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [value])
	return [value, setValue]
}
