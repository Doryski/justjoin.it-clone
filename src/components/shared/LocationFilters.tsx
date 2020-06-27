import React, { useState } from 'react'
import CustomButton from './CustomButton'
import styled from 'styled-components'
import { Dialog } from '@material-ui/core'
import Header from './Header'
import stringFormat from '../../helpers/stringFormat'
import PinkButton from './PinkButton'
import { connect } from 'react-redux'
import StyledLink from '../../helpers/StyledLink'
import url from '../../helpers/urlFunc'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { InitialStoreState } from '../../store/reducer'

const locationsArray = [
	'Warszawa',
	'Łódź',
	'Poznań',
	'Kraków',
	'Zielona Góra',
	'Białystok',
	'Wrocław',
]

const LocationFilters = ({ params }: { params: any }) => {
	const [dialogOpen, setDialogOpen] = useState(false)
	const [location, setLocation] = useState(null)
	const fullScreen = useMediaQuery('(max-width:800px)')

	const onClose = () => {
		setDialogOpen(false)
		setLocation(null)
	}

	return (
		<>
			<ButtonWrapper>
				<CustomButton
					onclick={() => setDialogOpen(true)}
					active={params.location}
					icon
				>
					Location
				</CustomButton>
			</ButtonWrapper>

			<Dialog
				maxWidth='md'
				open={dialogOpen}
				onClose={onClose}
				fullWidth={true}
				fullScreen={fullScreen}
			>
				<Container>
					<Header close={onClose}>Location</Header>
					<Wrapper>
						{locationsArray.map(loc => (
							<ItemWrapper>
								<CustomButton
									onclick={() =>
										setLocation(stringFormat(loc))
									}
									active={
										location
											? stringFormat(loc) ===
											  location
											: stringFormat(loc) ===
											  params.location
									}
									padding='8px 30px'
								>
									{loc}
								</CustomButton>
							</ItemWrapper>
						))}
					</Wrapper>
					<BottomWrapper>
						<StyledLink
							to={url({ ...params, location: null })}
							onClick={onClose}
						>
							<CustomButton padding='8px 30px'>
								Clear filters
							</CustomButton>
						</StyledLink>

						<StyledLink
							to={url({
								...params,
								location: location || params.location,
							})}
							onClick={onClose}
						>
							<PinkButton>Show offers</PinkButton>
						</StyledLink>
					</BottomWrapper>
				</Container>
			</Dialog>
		</>
	)
}
const ButtonWrapper = styled.div`
	margin: 0 25px 0 5px;
`
const ItemWrapper = styled.div`
	margin: 5px 10px;
	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.s}) {
		margin: 5px 5px;
	}
`
const Container = styled.div`
	height: 100%;
	width: 100%;
	background: ${({ theme }) => theme.colors.primary};
	padding-bottom: 10px;
	padding: 0 20px;
`
const Wrapper = styled.div`
	display: flex;
	padding: 25px 15px;
	flex-wrap: wrap;
`
const BottomWrapper = styled.div`
	padding: 15px;
	display: flex;
	justify-content: space-between;
	border-top: 2px solid ${({ theme }) => theme.colors.secondary};
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps)(LocationFilters)
