import React, { useState } from 'react'
import CustomButton from './CustomButton'
import styled from 'styled-components'
import { Dialog } from '@material-ui/core'
import DialogHeader from './DialogHeader'
import stringFormat from '../../helpers/stringFormat'
import PinkButton from './PinkButton'
import { connect } from 'react-redux'
import StyledLink from '../../helpers/StyledLink'
import url from '../../helpers/urlFunc'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { InitialStoreState } from '../../store/reducer'
import { locationArray } from '../../helpers/options'
import DialogFooter from './DialogFooter'
import Typography from '../../helpers/Typography'

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
					onclick={() => {
						setDialogOpen(true)
					}}
					active={params.location}
					icon
				>
					Location
				</CustomButton>
			</ButtonWrapper>

			<Dialog
				maxWidth='sm'
				open={dialogOpen}
				onClose={onClose}
				fullWidth={true}
				fullScreen={fullScreen}
			>
				<Container>
					<DialogHeader close={onClose}>
						Location
					</DialogHeader>

					<Typography
						style={{ display: 'flex' }}
						color='text'
						fWeight='700'
						fontSize='1rem'
						padding='20px 20px 0 20px'
					>
						Top locations
					</Typography>
					<Wrapper>
						{locationArray.slice(0, 6).map(loc => (
							<ItemWrapper key={loc}>
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
					<Typography
						style={{ display: 'flex' }}
						color='text'
						fWeight='700'
						fontSize='1rem'
						padding='0 20px'
					>
						Other locations
					</Typography>
					<Wrapper>
						{locationArray.slice(6).map(loc => (
							<ItemWrapper key={loc}>
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

					<DialogFooter
						params={params}
						onClose={onClose}
						location={location}
						filterType={'location'}
					/>
				</Container>
			</Dialog>
		</>
	)
}
const ButtonWrapper = styled.div`
	margin: 0 25px 0 5px;
`
const ItemWrapper = styled.div`
	margin: 5px;
`
const Container = styled.div`
	height: 100%;
	width: 100%;
	background: ${({ theme }) => theme.colors.primary};
`
const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 15px;
`

const mapStateToProps = ({ params }: InitialStoreState) => ({
	params,
})

export default connect(mapStateToProps)(LocationFilters)
