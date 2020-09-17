import React, { useState, createContext } from 'react'
import { Dialog } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { FIELD_REQUIRED_ERR, DATE_FORMAT } from '../../helpers/utils'
import moment from 'moment'
import database from '../../firebase'
import OfferType from '../../types/OfferType'
import Center from '../shared/Center'
import createSlug from '../../helpers/createSlug'

type AddOfferContextType = {
    register: Function
    errors: Record<string, any>
    loading: boolean
    descriptionError: string
    setDescription: React.Dispatch<React.SetStateAction<string>>
}

type FormData = {
    id: OfferType['id']
    city: OfferType['city']
    street: OfferType['street']
    tech: OfferType['tech']
    offerTitle: OfferType['offerTitle']
    companyName: OfferType['companyName']
    companySize: OfferType['companySize']
    technology: string[]
    techLvl: number[]
    empType: string
    expLvl: string
    salaryFrom: number
    salaryTo: number
}

const initialContext = {
    register: () => {},
    errors: {},
    loading: false,
    descriptionError: '',
    setDescription: () => {},
}

export const AddOfferContext = createContext<AddOfferContextType>(
    initialContext
)

const AddOfferContextProvider = ({
    children,
    isDialogOpen,
    close,
}: {
    children: React.ReactNode
    isDialogOpen: boolean
    close: VoidFunction
}) => {
    const { handleSubmit, register, errors } = useForm()
    const [description, setDescription] = useState('')
    const [descriptionError, setDescriptionError] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const fullScreen = useMediaQuery('(max-width:800px)')

    const onSubmit = handleSubmit((data: FormData) => {
        setLoading(true)
        if (!description) {
            setDescriptionError(FIELD_REQUIRED_ERR)
            setLoading(false)
            return
        }
        let technology = []
        for (let i = 0; i < data.technology.length; i++) {
            technology.push({
                tech: data.technology[i],
                techLvl: +data.techLvl[i],
            })
        }

        let formData: OfferType & { techLvl?: number[] } = {
            ...data,
            slug: createSlug([data.companyName, data.offerTitle]),
            dateAdd: moment().format(DATE_FORMAT),
            image: 'https://source.unsplash.com/700x400/?logo',
            placeId: `${data.street}-${data.city}`,
            description,
            technology,
        }
        delete formData.techLvl
        database
            .ref('offers')
            .push(formData)
            .then(
                () => {
                    setSuccess(true)
                    setLoading(false)
                },
                error => {
                    setError(true)
                    console.log('Error fetching data', error)
                }
            )
    })

    return (
        <AddOfferContext.Provider
            value={{
                register,
                errors,
                loading,
                setDescription,
                descriptionError,
            }}
        >
            {(success || error) && (
                <Dialog
                    maxWidth='sm'
                    open={isDialogOpen}
                    onClose={() => {
                        setSuccess(false)
                        close()
                    }}
                    fullWidth
                    fullScreen={fullScreen}
                >
                    <Center height='50vh'>
                        {success && 'Offer was added successfully!'}
                        {error &&
                            "Couldn't add offer. Please try again"}
                    </Center>
                </Dialog>
            )}
            {!success && !error && (
                <Dialog
                    maxWidth='md'
                    open={isDialogOpen}
                    onClose={close}
                    fullWidth
                    fullScreen={fullScreen}
                >
                    <form onSubmit={onSubmit}>{children}</form>
                </Dialog>
            )}
        </AddOfferContext.Provider>
    )
}
export default AddOfferContextProvider
