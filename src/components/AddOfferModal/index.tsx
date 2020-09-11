import React, { useState } from 'react'
import { Dialog } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import CircularProgress from '@material-ui/core/CircularProgress'
import DialogHeader from '../shared/DialogHeader'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import InfoSection from './InfoSection'
import TechnologySection from './TechnologySection'
import EditorSection from './EditorSection'
import styled from 'styled-components'
import { Wrapper } from './StyledComponents'
import CustomButton from '../shared/CustomButton'
import { FIELD_REQUIRED_ERR, DATE_FORMAT } from '../../helpers/utils'
import moment from 'moment'

const AddOfferModal = ({
    isDialogOpen,
    close,
}: {
    isDialogOpen: boolean
    close: VoidFunction
}) => {
    const { handleSubmit, register, errors } = useForm()
    const [description, setDescription] = useState('')
    const [descriptionError, setDescriptionError] = useState('')
    const [loading, setLoading] = useState(false)
    const fullScreen = useMediaQuery('(max-width:800px)')
    const [techSize, setTechSize] = useState(1)
    const handleTechSize = {
        add: () => setTechSize(techSize + 1),
        remove: () => setTechSize(techSize - 1),
    }

    const onSubmit = handleSubmit(data => {
        setLoading(true)
        if (!description) {
            setDescriptionError(FIELD_REQUIRED_ERR)
            return setLoading(false)
        }
        let technology = []
        for (let i = 0; i < data.technology.length; i++) {
            technology.push({
                tech: data.technology[i],
                techLvl: data.techLvl[i],
            })
        }
        let formData: { [x: string]: any } = {
            ...data,
            slug: `${data.offerTitle}_${data.companyName}_${data.city}`,
            dateAdd: moment().format(DATE_FORMAT),
            image: 'https://source.unsplash.com/700x400/?logo',
            placeId: `${data.street}-${data.city}`,
            description,
            technology,
        }
        delete formData.techLvl

        setLoading(false)

        alert('Offer was added successfully!')

        close()
    })

    return (
        <Dialog
            maxWidth='md'
            open={isDialogOpen}
            onClose={close}
            fullWidth={true}
            fullScreen={fullScreen}
        >
            <form onSubmit={onSubmit}>
                <Container>
                    <DialogHeader close={close}>
                        Add offer
                    </DialogHeader>
                    <InfoSection
                        register={register}
                        errors={errors}
                    />
                    <DialogHeader>Technology</DialogHeader>
                    <TechnologySection
                        techSize={techSize}
                        handleTechSize={handleTechSize}
                        register={register}
                        errors={errors}
                    />
                    <DialogHeader>Description</DialogHeader>
                    <EditorSection
                        setDescription={setDescription}
                        descriptionError={descriptionError}
                    />
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
            </form>
        </Dialog>
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
