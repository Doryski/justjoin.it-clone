import { useState } from 'react'
import getFileName from './getFileName'

export default function useFileUpload(
    inputFileRef: React.RefObject<HTMLInputElement>
) {
    const element = inputFileRef.current!
    const [fileName, setFileName] = useState('')
    const handleFileUpload = () => {
        element.click()
    }
    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => setFileName(getFileName(e.target.value))

    const handleFileDelete = () => {
        element.value = ''
        if (!element.value) return setFileName('')

        alert("Couldn't delete file")
    }
    return {
        fileName,
        handleFileUpload,
        handleFileChange,
        handleFileDelete,
    }
}
