import { useEffect } from 'react'

export default function useUpdateLogger(value: any) {
	useEffect(() => {
		console.log(value)
	}, [value])
}
