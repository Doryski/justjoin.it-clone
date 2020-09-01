import React, { useState, useEffect, lazy } from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import {
	Share,
	ArrowBack,
	PersonOutline,
	Email,
	Create,
	Send,
} from '@material-ui/icons'
import InitialStoreState from '../../types/InitialStoreState'
import OfferType from '../../types/OfferType'
import { setParams } from '../../store/actions'
import InfoLabel from '../shared/InfoLabel'
import TechRange from '../shared/TechRange'
import Typography from '../shared/Typography'
import formatThous from '../../helpers/formatThous'
import infoLabels from '../../helpers/infoLabels'
import { TextField, Checkbox } from '@material-ui/core'
import CustomButton from '../shared/CustomButton'
import UploadCv from '../shared/UploadCv'
import InputIcon from './InputIcon'
import theme, { textColors } from '../../theme'

const OfferPage = ({ offers }: { offers: OfferType[] }) => {
	const { slug } = useParams()

	const [offer, setOffer] = useState<OfferType>(
		!!localStorage.offers
			? JSON.parse(localStorage.offers)[0]
			: offers[0]
	)

	const [loading2, setLoading2] = useState(false)

	useEffect(() => {
		setLoading2(true)
		const posts = !!localStorage.offers
			? JSON.parse(localStorage.offers)
			: offers
		const foundPost = posts.find(
			(post: OfferType) => post.slug === slug
		)
		setOffer(foundPost)
		setLoading2(false)
	}, [slug])

	const [isChecked, setIsChecked] = useState<boolean>(true)

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => setIsChecked(event.target.checked)

	return (
		<Container>
			<ContainerScroll>
				{!loading2 && (
					<>
						<HeaderContainer>
							<HeaderInner tech={offer.tech}>
								<Link to='/'>
									<HeaderActionIcon arrow>
										<ArrowBack />
									</HeaderActionIcon>
								</Link>
								<HeaderActionIcon>
									<Share />
								</HeaderActionIcon>

								<HeaderWrapper>
									<ImgBackground>
										<Img src={offer.image} />
									</ImgBackground>
									<MainInfoContainer>
										<Typography
											color={textColors.white}
											align='flex-start'
											margin='0.25em 0'
											fWeight={
												theme.fontWeight[400]
											}
										>
											{formatThous(
												offer.salaryFrom
											)}{' '}
											-{' '}
											{formatThous(
												offer.salaryTo
											)}{' '}
											PLN
										</Typography>
										<Typography
											color={textColors.white}
											align='flex-start'
											fontSize={
												theme.fontSize.xl
											}
											margin='0.25em 0'
										>
											{offer.offerTitle}
										</Typography>
										<Typography
											color={textColors.white}
											align='flex-start'
											margin='0.25em 0'
											fWeight={
												theme.fontWeight[400]
											}
										>
											{offer.street},{' '}
											{offer.city}
										</Typography>
									</MainInfoContainer>
								</HeaderWrapper>
							</HeaderInner>
							<InfoLabelsContainer>
								{infoLabels.map(
									({
										id,
										title,
									}: {
										id: number
										title: string
									}) => (
										<InfoLabel
											key={id}
											id={id}
											// @ts-ignore
											title={offer[title]}
										/>
									)
								)}
							</InfoLabelsContainer>
						</HeaderContainer>
						<TechStackContainer>
							<Typography
								color={textColors.title}
								fWeight={theme.fontWeight[500]}
								fontSize={theme.fontSize.xl}
								align='flex-start'
								margin='0.625em 1.25em'
							>
								Tech stack
							</Typography>
							<Wrapper>
								{offer.technology?.map(
									(item: any) => (
										<TechRange
											key={item.tech}
											range={item.techLvl}
											tech={item.tech}
										/>
									)
								)}
							</Wrapper>
						</TechStackContainer>
						<DescriptionContainer>
							<Typography
								color={textColors.title}
								fWeight={theme.fontWeight[500]}
								fontSize={theme.fontSize.xl}
								align='flex-start'
								margin='0.625em 1.25em'
							>
								Description
							</Typography>

							<Wrapper>
								<DescriptionContent
									// dangerouslySetInnerHTML={createMarkup()}
									className='editor'
								></DescriptionContent>
							</Wrapper>
						</DescriptionContainer>
						<ApplyContainer>
							<Typography
								color={textColors.title}
								fWeight={theme.fontWeight[500]}
								fontSize={theme.fontSize.xl}
								align='flex-start'
								margin='0.625em 1.25em'
							>
								Apply for this job
							</Typography>

							<Wrapper>
								<Form>
									<FormGrid>
										{/* First & last name - input */}
										<TextField
											error
											id='firstAndLastName'
											label='First & Last Name'
											helperText='First & last name is a required field'
											variant='outlined'
											InputProps={{
												startAdornment: (
													<InputIcon
														Icon={
															PersonOutline
														}
													/>
												),
											}}
										/>
										{/* Email - input */}
										<TextField
											error
											id='email'
											label='Email'
											helperText='Email is a required field'
											variant='outlined'
											InputProps={{
												startAdornment: (
													<InputIcon
														Icon={Email}
													/>
												),
											}}
										/>
										{/* Introduce yourself (linkedin/github links) - input */}
										<TextField
											id='introduction'
											label='Introduce yourself (linkedin/github links)'
											variant='outlined'
											InputProps={{
												startAdornment: (
													<InputIcon
														Icon={Create}
													/>
												),
											}}
										/>
										{/* Upload CV (.pdf) - file loader */}
										<div>
											<input
												accept='application/pdf'
												type='file'
												autoComplete='off'
												name='cv'
												tabIndex={-1}
											/>
											<div>
												<div>
													<UploadCv />
												</div>
												<label htmlFor='cv'>
													<Typography>
														Upload CV
														(.pdf)
													</Typography>
												</label>
											</div>
										</div>
										{/* Processing data in future recruitment - check button */}
									</FormGrid>
									<div>
										<Checkbox
											checked={isChecked}
											onChange={handleChange}
											inputProps={{
												'aria-label':
													'primary checkbox',
											}}
										/>
										<Typography
											color={textColors.text}
										>
											Processing data in future
											recruitment
										</Typography>
									</div>
									<div>
										<CustomButton
											pink
											display='flex'
										>
											Apply
											<Typography
												color={
													textColors.pink
												}
											>
												<SendIcon />
											</Typography>
										</CustomButton>
									</div>
								</Form>
							</Wrapper>
						</ApplyContainer>
					</>
				)}
			</ContainerScroll>
		</Container>
	)
}
export const Container = styled.div`
	flex: 1;
	background: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
	padding: 0 1.25em;
	position: relative;
	flex: 1 1 0%;
`
export const ContainerScroll = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	padding: 0 0.9375em;
	overflow: auto;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.md}) {
		padding: 0 0.1875em;
	}
`
export const HeaderContainer = styled.div`
	height: 235px;
	position: relative;
	margin: 0 0 3.125em 0;
`
export const HeaderInner = styled.div<{ tech: string }>`
	background: url(https://justjoin.it/static/media/header_background.0ef18c97.png)
			center center / cover no-repeat,
		${({ theme, tech }) => theme.techColors[tech]};
	height: 100%;
	border-radius: 0px 0px 4px 4px;
	padding: 2.5em 2.5em 2.5em;
	position: relative;
`
export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	align-content: flex-start;
	justify-content: center;
`
export const ImgBackground = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	width: 107px;
	height: 107px;
	display: flex;
	position: relative;
	border-radius: 50%;
	align-items: center;
	justify-content: center;

	&:after,
	&:before {
		content: '';
		position: absolute;
		border-radius: 50%;
		width: 100%;
		height: 100%;
	}
	&:before {
		background: rgba(255, 255, 255, 0.5);
		transform: scale(1.2);
	}
	&:after {
		background: rgba(255, 255, 255, 0.3);
		transform: scale(1.4);
	}
`
export const Img = styled.img`
	max-width: 70px;
	max-height: 45px;
	z-index: 1;
`
export const MainInfoContainer = styled.div`
	flex: 1;
	margin: 0 0 0 2.5em;
`
export const InfoLabelsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	transform: translateY(-50%);
	width: 100%;
	padding: 0 0.9375em;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.md}) {
		transform: translateY(-25%);
	}
`
export const TechStackContainer = styled.div`
	padding: 0.3125em 0;
	box-shadow: ${({ theme }) => theme.colors.shadow};
	margin-top: 2.5em;
	background: ${({ theme }) => theme.colors.primary};
	border-radius: 5px;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.md}) {
		margin-top: 10.625em;
	}
`
export const Wrapper = styled.div`
	padding: 1.5em;
	border-top: 2px solid ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-wrap: wrap;
`
export const DescriptionContainer = styled.div`
	margin: 1.875em 0;
	padding: 0.3125em 0;
	box-shadow: ${({ theme }) => theme.colors.shadow};
	background: ${({ theme }) => theme.colors.primary};
	border-radius: 5px;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.md}) {
		margin: 0.9375em 0;
	}
`
export const DescriptionContent = styled.div`
	padding: 0 0.9375em;
	color: ${({ theme }) => theme.colors.title};
`
export const ProgressWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 2.5em;
`

export const ApplyContainer = styled.div`
	margin: 1.875em 0;
	padding: 0.3125em 0;
	box-shadow: ${({ theme }) => theme.colors.shadow};
	background: ${({ theme }) => theme.colors.primary};
	border-radius: 5px;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.md}) {
		margin: 0.9375em 0;
	}
`

export const HeaderActionIcon = styled.button<{ arrow?: boolean }>`
	position: absolute;
	color: ${({ theme }) => theme.colors.white};
	background: rgba(0, 0, 0, 0.2);
	width: 28px;
	height: 28px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 10px;
	left: ${({ arrow }) => (arrow ? '10px' : '')};
	right: ${({ arrow }) => (arrow ? '' : '10px')};
	padding: 2px;
	border: none;
	border-radius: 4px;
	transition: all 300ms ease-out 0s;
	&:hover {
		background: rgba(0, 0, 0, 0.35);
	}
`
export const Form = styled.form`
	width: 100%;
`

export const FormGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
`

export const SendIcon = styled(Send)`
	background: linear-gradient(
		110deg,
		rgb(178, 44, 90) 30%,
		rgb(255, 255, 255) 32%
	);
	// width: 100%;
	height: 100%;
	padding: 8px 8px 8px 24px;
`

const mapStateToProps = ({ params, offers }: InitialStoreState) => ({
	params,
	offers,
})

export default connect(mapStateToProps, { setParams })(OfferPage)
