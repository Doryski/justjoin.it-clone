import React, { useState } from 'react'
import PinkButton from './PinkButton'
import _ from 'lodash'
import { Dialog } from '@material-ui/core'
import styled from 'styled-components'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
import { useForm } from 'react-hook-form'
import {
	techOptions,
	expLvlOptions,
	empTypeOptions,
	techLvlOptions,
} from '../../helpers/Options'
import axios from '../../axios'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {
	InputComponent,
	SelectComponent,
	InputWrapper,
	Label,
	StyledTextField,
} from './CustomInputs'
import Header from './Header'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CircularProgress from '@material-ui/core/CircularProgress'
import apiKey from '../../apiKey'

const AddOfferModal = ({
	dialogOpen,
	setDialogOpen,
}: {
	dialogOpen: any
	setDialogOpen: any
}) => {
	const {
		register,
		handleSubmit,
		errors,
		getValues,
		setError,
	} = useForm()
	const [techSize, setTechSize] = useState(1)
	const [description, setDescription] = useState('')
	const [descriptionError, setDescriptionError] = useState('')
	const [loading, setLoading] = useState(false)
	const fullScreen = useMediaQuery('(max-width:800px)')

	//optional image input

	// const [imageName, setImageName] = useState('')
	// const [imageURL, setImageURL] = useState('')
	// const [image, setImage] = useState(null)

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

		console.log(finalData, 'final')

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
			.finally(() => setLoading(false))
	}

	//optional image input

	// const fileSelectedHandler = event =>{
	//     var reader = new FileReader()
	//     const image_name = event.target.files[0].name
	//     setImage(event.target.files[0])

	//     reader.onload = (e) => {
	//         setImageURL(e.target.result)
	//         setImageName(image_name)
	//     };

	//     reader.readAsDataURL(event.target.files[0]);
	// }

	const techSizeHandler = (action: any = '') =>
		setTechSize(action === 'add' ? techSize + 1 : techSize - 1)

	return (
		<Dialog
			maxWidth='md'
			open={dialogOpen}
			onClose={() => setDialogOpen(false)}
			fullWidth={true}
			fullScreen={fullScreen}
		>
			<form
				onSubmit={handleSubmit(onSubmit)}
				autoComplete='off'
			>
				<Container>
					<Header close={() => setDialogOpen(false)}>
						Add offer
					</Header>
					<InputsContainer>
						<SelectComponent
							id='tech'
							label='Technology'
							register={register}
							required
							errors={errors}
							options={techOptions}
						/>

						<InputComponent
							type='text'
							id='offer_title'
							label='Offer title'
							register={register}
							required
							errors={errors}
						/>
						<InputComponent
							type='text'
							id='company_name'
							label='Company name'
							register={register}
							required
							errors={errors}
						/>

						<InputComponent
							type='text'
							id='city'
							label='City'
							register={register}
							required
							errors={errors}
						/>
						<InputComponent
							type='text'
							id='street'
							label='Street'
							register={register}
							required
							errors={errors}
						/>
						<InputWrapper>
							<Label>Company size</Label>
							<StyledTextField
								type='number'
								name='companySize'
								ref={register({
									required:
										'This field is required.',
									validate: {
										lessThan: value =>
											value > 0 ||
											'Company size should be more than 0.',
										moreThan: value =>
											value < 100000 ||
											"It's too big number.",
									},
								})}
							/>
							{errors.companySize && (
								<Info>
									{errors.companySize.message}
								</Info>
							)}
						</InputWrapper>

						{/* <InputWrapper>
                                <Label>Compoany logo</Label>
                                <input 
                                    type='file' 
                                    name="image"  
                                    id="file"  
                                    accept="image/jpeg, image/png"
                                    onChange={fileSelectedHandler}
                                    ref={register({required: 'This field is required.'})}
                                />
                                <label htmlFor="file" >Choose a image</label>
                                <LogoImg src={imageURL}/>
                                {errors.image  && <Info>{errors.image.message}</Info>}
                                <Info span>{imageName}</Info>
                                
                            </InputWrapper> */}

						<Wrapper>
							<InputWrapper>
								<Label>Salary from</Label>
								<StyledTextField
									type='number'
									name='salaryFrom'
									ref={register({
										required:
											'This field is required.',
										validate: {
											lessThan: value =>
												value > 0 ||
												'Company size should be more than 0.',
											moreThan: value =>
												value < 120000 ||
												"It's too big number.",
										},
									})}
								/>
								{errors.salaryFrom && (
									<Info>
										{errors.salaryFrom.message}
									</Info>
								)}
							</InputWrapper>

							<InputWrapper>
								<Label>Salary to</Label>
								<StyledTextField
									type='number'
									name='salaryTo'
									ref={register({
										required:
											'This field is required.',
										validate: {
											lessThan: value =>
												value > 0 ||
												'Company size should be more than 0.',
											moreThan: value =>
												value < 120000 ||
												"It's too big number.",
										},
									})}
								/>
								{errors.salaryTo && (
									<Info>
										{errors.salaryTo.message}
									</Info>
								)}
							</InputWrapper>
						</Wrapper>
						<Wrapper>
							<SelectComponent
								id='emp_type'
								label='EMP type'
								register={register}
								required
								errors={errors}
								options={empTypeOptions}
							/>

							<SelectComponent
								id='exp_lvl'
								label='EXP level'
								register={register}
								required
								errors={errors}
								options={expLvlOptions}
							/>
						</Wrapper>
					</InputsContainer>

					<Header>Technology</Header>

					<InputsContainer>
						{[...Array(techSize)].map((v, index) => (
							<Wrapper>
								<InputComponent
									max='35'
									type='text'
									id={`tech_${index}`}
									label='Technology'
									register={register}
									required
									errors={errors}
								/>

								<SelectComponent
									id={`tech_lvl_${index}`}
									label='Tech level'
									register={register}
									required
									errors={errors}
									options={techLvlOptions}
								/>
							</Wrapper>
						))}

						<IconsWrapper>
							{techSize < 10 && (
								<IconWrapper
									onClick={() =>
										techSizeHandler('add')
									}
								>
									<MyAddIcon />
								</IconWrapper>
							)}

							{techSize > 1 && (
								<IconWrapper
									onClick={() => techSizeHandler()}
								>
									<MyRemoveIcon />
								</IconWrapper>
							)}
						</IconsWrapper>
					</InputsContainer>

					<Header>Description</Header>

					<EditorContainer>
						<CKEditor
							editor={ClassicEditor}
							onChange={(event: any, editor: any) => {
								const data = editor.getData()
								setDescription(data)
							}}
						/>
						{descriptionError && (
							<Info>{descriptionError}</Info>
						)}
					</EditorContainer>

					<Wrapper>
						<PinkButton
							onclick={() => setDialogOpen(true)}
						>
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

const InputsContainer = styled.div`
	padding: 20px;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.s}) {
		padding: 5px;
	}
`

const Info = styled.span`
	color: ${(props: any) =>
		props.span
			? props.theme.colors.span
			: props.theme.colors.pink};
	font-size: 0.7rem;
	margin-left: 10px;
`
const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`
const LogoImg = styled.img`
	max-width: 90px;
	max-height: 65px;
	display: block;
	margin-left: 40px;
`
const IconsWrapper = styled.div`
	padding: 5px 10px;
	border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
	border-radius: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 200px;
	margin: auto;
`
const IconWrapper = styled.div`
	padding: 5px 10px;
	border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
	border-radius: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 3px;
	width: 50%;
	cursor: pointer;
	&:hover {
		background: ${({ theme }) =>
			theme.colors.buttonBackgroundHover};
	}
`
const EditorContainer = styled.div`
	width: 100%;
	padding: 15px;
`
const MyAddIcon = styled(AddIcon)`
	color: ${({ theme }) => theme.colors.span};
`
const MyRemoveIcon = styled(RemoveIcon)`
	color: ${({ theme }) => theme.colors.span};
`
const StyledCircularProgress = styled(CircularProgress)`
	margin: 0 25px;
`

export default AddOfferModal
