import React, { useState } from 'react'
import PinkButton from '../PinkButton'
import _ from 'lodash'
import { Dialog } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import CircularProgress from '@material-ui/core/CircularProgress'
import axios from '../../../axios'
import DialogHeader from '../DialogHeader'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import apiKey from '../../../apiKey'
import InfoSection from './InfoSection'
import TechnologySection from './TechnologySection'
import EditorSection from './EditorSection'
import styled from 'styled-components'
import { Wrapper } from './StyledComponents'

const AddOfferModal = ({
	dialogOpen,
	setDialogOpen,
}: {
	dialogOpen: any
	setDialogOpen: any
}) => {
	const {
		handleSubmit,
		getValues,
		setError,
	} = useForm()
	const [techSize, setTechSize] = useState(1)
	const [description, setDescription] = useState('')
	const [descriptionError, setDescriptionError] = useState('')
	const [loading, setLoading] = useState(false)
	const fullScreen = useMediaQuery('(max-width:800px)')

	const onSubmit = async (inputsData: any) => {
		if (!description)
			setDescriptionError('This field is required.')

		setLoading(true)

		const { data } = await axios.get(
			'https://maps.googleapis.com/maps/api/geocode/json',
			{
				params: {
					apiKey,
					address: `${getValues('city')} ${getValues(
						'street'
					)}`,
				},
			}
		)
		const address = {
			city: '',
			street: '',
		}

		if (data.status !== 'OK') {
			return setError([
				{
					name: 'city',
					message: "Can't find this location.",
				},
				{
					name: 'street',
					message: "Can't find this location.",
				},
			])
		}

		let route = ''
		let political = ''
		let streetNumber = ''

		data.results[0].address_components.forEach((i: any) => {
			switch (i.types[0]) {
				case 'political':
					return (political = i.long_name)
				case 'route':
					return (route = i.long_name)
				case 'street_number':
					return (streetNumber = i.long_name)
				case 'locality':
					return (address.city = i.long_name)
			}
		})

		address.street = `${political} ${route} ${streetNumber}`

		const finalData = {
			...inputsData,
			...address,
			techSize,
			description,
			placeId: data.results[0].place_id,
			lat: data.results[0].geometry.location.lat,
			lng: data.results[0].geometry.location.lng,
		}

		let formData = new FormData()

		_.forEach(finalData, (value: any, key: any) => {
			formData.append(key, value)
		})

		axios
			.post('/posts/', formData, {
				headers: {
					'content-type': 'multipart/form-data',
				},
			})
			.then(res => {
				setDialogOpen(false)
				alert('Success. You added offer.')
			})
			.catch(err => alert(err.message))
			.finally(() => {
				setLoading(false)
			})
	}

	const onClose = () => {
		setDialogOpen(false)
	}	

	const onOpen = () => {
		setDialogOpen(true)
	}

	return (
		<Dialog
			maxWidth='md'
			open={dialogOpen}
			onClose={onClose}
			fullWidth={true}
			fullScreen={fullScreen}
		>
			<form
				onSubmit={handleSubmit(onSubmit)}
				autoComplete='off'
			>
				<Container>
					<DialogHeader close={onClose}>
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
						<PinkButton onclick={onOpen}>
							{loading ? (
								<StyledCircularProgress
									size='10px'
									color='secondary'
								/>
							) : (
								'Add offer'
							)}
						</PinkButton>
					</Wrapper>
				</Container>
			</form>
		</Dialog>
	)
}

const Container = styled.div`
	height: 100%;
	width: 100%;
	background: ${({ theme }) => theme.colors.primary};
	padding-bottom: 10px;
`
const StyledCircularProgress = styled(CircularProgress)`
	margin: 0 25px;
`

export default AddOfferModal
