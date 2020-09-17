import React, { useContext, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import DialogHeader from '../shared/DialogHeader'
import InfoSection from './InfoSection'
import TechnologySection from './TechnologySection'
import EditorSection from './EditorSection'
import styled from 'styled-components'
import { Wrapper } from './StyledComponents'
import CustomButton from '../shared/CustomButton'
import AddOfferContextProvider, {
    AddOfferContext,
} from './AddOfferContext'

const AddOfferModal = ({
    isDialogOpen,
    close,
}: {
    isDialogOpen: boolean
    close: VoidFunction
}) => {
    const { loading } = useContext(AddOfferContext)
    const [techSize, setTechSize] = useState(1)
    const handleTechSize = {
        add: () => setTechSize(techSize + 1),
        remove: () => setTechSize(techSize - 1),
    }

    return (
        <AddOfferContextProvider
            isDialogOpen={isDialogOpen}
            close={close}
        >
            <Container>
                <DialogHeader close={close}>Add offer</DialogHeader>
                <InfoSection />
                <DialogHeader>Technology</DialogHeader>
                <TechnologySection
                    techSize={techSize}
                    handleTechSize={handleTechSize}
                />
                <DialogHeader>Description</DialogHeader>
                <EditorSection />
                <Wrapper>
                    <CustomButton
                        type='submit'
                        padding='0.5em 1.125em'
                        pink
                    >
                        {loading ? (
                            <StyledCircularProgress
                                size='10px'
                                color='secondary'
                            />
                        ) : (
                            'Add offer'
                        )}
                    </CustomButton>
                </Wrapper>
            </Container>
        </AddOfferContextProvider>
    )
}

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};
    padding-bottom: 0.625em;
`
export const StyledCircularProgress = styled(CircularProgress)`
    margin: 0 1.5625em;
`

export default AddOfferModal
