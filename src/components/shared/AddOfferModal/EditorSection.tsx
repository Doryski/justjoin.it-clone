import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import styled from 'styled-components'
import { ErrorMessage } from './StyledComponents'

const EditorSection = ({
	setDescription,
	descriptionError,
}: {
	setDescription: React.Dispatch<React.SetStateAction<string>>
	descriptionError: string
}) => {
	const onChangeDescription = (event: any, editor: any) => {
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

const EditorContainer = styled.div`
	width: 100%;
	padding: 0.9375em;
`
export default EditorSection
