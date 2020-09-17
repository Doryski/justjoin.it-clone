import React, { useContext } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import styled from 'styled-components'
import { ErrorMessage } from './StyledComponents'
import { AddOfferContext } from './AddOfferContext'

const EditorSection = () => {
    const { setDescription, descriptionError } = useContext(
        AddOfferContext
    )

    const onChangeDescription = (
        event: React.ChangeEvent,
        editor: any
    ) => {
        const data = editor.getData()
        setDescription(data)
    }

    return (
        <EditorContainer>
            <CKEditor
                editor={ClassicEditor}
                onChange={onChangeDescription}
            />
            {descriptionError && (
                <ErrorMessage>{descriptionError}</ErrorMessage>
            )}
        </EditorContainer>
    )
}

export const EditorContainer = styled.div`
    width: 100%;
    padding: 0.9375em;
`
export default EditorSection
