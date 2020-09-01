import { useState, useEffect } from 'react'

export default function useDeviceDetect(windowWidth: number) {
	const getWindowWidth = () =>
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth
	const [isMobile, setIsMobile] = useState(false)
	useEffect(() => {
		const resizeListener = () => {
			setIsMobile(getWindowWidth() < windowWidth)
		}

		window.addEventListener('resize', resizeListener)

		return () => {
			window.removeEventListener('resize', resizeListener)
		}
	}, [])
	return isMobile
}
