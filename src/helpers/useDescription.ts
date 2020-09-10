import { useEffect } from 'react'

export default function useSetInnerHTML(
    ref: React.RefObject<any>,
    innerHTML: string
) {
    useEffect(() => {
        ref.current.innerHTML = innerHTML

        return () => {
            ref.current.innerHTML = ''
        }
    }, [innerHTML])
}
