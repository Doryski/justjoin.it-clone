import React from 'react'
import CustomButton from '../shared/CustomButton'
import theme from '../../theme'
import useDialogHandler from '../../helpers/useDialogHandler'
import AddOfferModal from '.'

const AddOffer = () => {
    const { open, isDialogOpen, close } = useDialogHandler(false)

    return (
        <>
            <CustomButton
                fWeight={theme.fontWeight[400]}
                handleClick={open}
                margin='0 0.875em 0 0.375em'
                padding='0.625em 1.125em'
            >
                Post a Job
            </CustomButton>
            {isDialogOpen && (
                <AddOfferModal
                    isDialogOpen={isDialogOpen}
                    close={close}
                />
            )}
        </>
    )
}

export default AddOffer
