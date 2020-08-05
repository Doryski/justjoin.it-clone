import React, { useState } from 'react'
import _ from 'lodash'
import { Dialog } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import CircularProgress from '@material-ui/core/CircularProgress'
import DialogHeader from '../DialogHeader'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import InfoSection from './InfoSection'
import TechnologySection from './TechnologySection'
import EditorSection from './EditorSection'
import styled from 'styled-components'
import { Wrapper } from './StyledComponents'
import CustomButton from '../CustomButton'
import { setOffers } from '../../../store/actions'
import moment from 'moment'
import isDefined from '../../../helpers/isDefined'
import DATE_FORMAT from '../../../helpers/dateFormat'

interface HandleDialog {
	open: () => void
	close: () => void
}

interface FormDataType {
	tech: string
	offerTitle: string
	companyName: string
	city: string
	street: string
	companySize: number
	salaryFrom: number
	salaryTo: number
	empType: string
	expLvl: string
	technology: string
	techLvl: number
}

const AddOfferModal = ({
	dialogOpen,
	handleDialog,
}: {
	dialogOpen: boolean
	handleDialog: HandleDialog
}) => {
	const { handleSubmit, getValues, errors } = useForm<
		FormDataType
	>()
	const [techSize, setTechSize] = useState(1)
	const [description, setDescription] = useState('')
	const [descriptionError, setDescriptionError] = useState('')
	const [loading, setLoading] = useState(false)
	const fullScreen = useMediaQuery('(max-width:800px)')
	const location = getValues('city')
	const street = getValues('street')

	const onSubmit = handleSubmit((data, e) => {
		// setDescriptionError('')
		// console.log(description)
		console.log(errors)
		if (!description)
			return setDescriptionError('This field is required.')
		if (!data.companyName) return alert("there's no data")

		setLoading(true)

		// const finalData = {
		// 	...data,
		// 	dateAdd: moment().format(DATE_FORMAT),
		// 	image: 'https://source.unsplash.com/700x400/?logo',
		// 	description,
		// 	placeId: `${street}-${location}`,
		// }
		// console.log(finalData)
		// setOffers(finalData)
		// // let formData = new FormData()

		// // _.forEach(finalData, (value: string, key: string) => {
		// // 	formData.append(key, value)
		// // })

		// // try {
		// // 	await axios.post('/posts/', formData, {
		// // 		headers: {
		// // 			'content-type': 'multipart/form-data',
		// // 		},
		// // 	})
		// // 	setDialogOpen(false)
		// // 	alert('Success. You added offer.')
		// // } catch (error) {
		// // 	alert(error.message)
		// // }

		setLoading(false)
		alert('Offer was added successfully!')

		console.log(data, e)
		return handleDialog.close()
	})

	return (
		<Dialog
			maxWidth='md'
			open={dialogOpen}
			onClose={handleDialog.close}
			fullWidth={true}
			fullScreen={fullScreen}
		>
			<form onSubmit={onSubmit}>
				<Container>
					<DialogHeader close={handleDialog.close}>
						Add offer
					</DialogHeader>
					<InfoSection />
					<DialogHeader>Technology</DialogHeader>
					<TechnologySection
						techSize={techSize}
						setTechSize={setTechSize}
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
